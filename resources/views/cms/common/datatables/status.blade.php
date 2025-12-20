<span @class([
    'badge', App\Core\Enums\DefaultStatus::tryFrom($status)->badge()
])>{{ App\Core\Enums\DefaultStatus::tryFrom($status)->description() }}</span>