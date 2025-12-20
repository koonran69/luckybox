<input type="email" 
{{ $attributes
    ->class(['form-control'])
    ->merge([
        'placeholder' => __('email'),
        'autocomplete' => 'email',
        'data-parsley-type-message' => __('msgValidateEmail')
    ])->merge($isRequired())
}}>