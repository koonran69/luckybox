<?php

namespace Domains\Localization\Supports\Eloquent;

use Illuminate\Support\Facades\App;

trait Translation
{
    public function getTranslationDefault()
    {
        if($this->relationLoaded('translations'))
        {
            return $this->translations->where('locale', App::currentLocale())->first();
        }

        $this->loadMissing(['translation' => fn($q) => $q->language(App::currentLocale())]);

        return $this->translation;
    }

    public function isLanguage($locale): bool
    {
        $this->loadMissing('translations');
        $translations = $this->translations->pluck('locale')->toArray();

        return in_array($locale, $translations);
    }

    public function translations()
    {
        $relationTranslate = $this->relationTranslate ?? null;
        $columnTranslate = $this->columnTranslate ?? null;

        return $this->hasMany($relationTranslate, $columnTranslate);
    }

    public function translation($locale = null)
    {
        $relationTranslate = $this->relationTranslate ?? null;
        $columnTranslate = $this->columnTranslate ?? null;
        
        if($locale)
        {
            return $this->hasOne($relationTranslate, $columnTranslate)->where('locale', $locale);
        }

        return $this->hasOne($relationTranslate, $columnTranslate);
    }

    public function currentTranslation()
    {
        return $this->translation(App::currentLocale());
    }

    public function scopeHasCurrentTranslation($query, $locale = null)
    {
        $locale = $locale ?: App::currentLocale();

        $query->whereRelation('translations', 'locale', $locale);
    }
}