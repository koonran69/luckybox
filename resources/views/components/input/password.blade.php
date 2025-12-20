<div class="input-icon">
    <input type="password" 
        {{ $attributes
            ->class(['form-control'])
            ->merge([
                'placeholder' => __('password'),
                'autocomplete' => 'current-password'
            ])->merge($isRequired())
        }}
    >
    @if ($showToggle)
        <span class="input-icon-addon toggle-password">
            <i class="ti ti-eye"></i>
            <i class="ti ti-eye-off"></i>
        </span>
    @endif
</div>
