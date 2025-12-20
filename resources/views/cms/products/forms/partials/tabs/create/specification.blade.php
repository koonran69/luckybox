<div class="row mb-3">
    <label class="col-4 col-form-label">@lang('Chiều rộng tròng kính')</label>
    <div class="col">
        <x-input name="translation[lens_width]" :placeholder="trans('VD: 50mm')" />
    </div>
</div>
<div class="row mb-3">
    <label class="col-4 col-form-label">@lang('Chiều rộng gọng kính')</label>
    <div class="col">
        <x-input name="translation[temple_length]" :placeholder="trans('VD: 150mm')" />
    </div>
</div>
<div class="row mb-3">
    <label class="col-4 col-form-label">@lang('Cầu kính')</label>
    <div class="col">
        <x-input name="translation[bridge_size]" :placeholder="trans('VD: 16mm')" />
    </div>
</div>