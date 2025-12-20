<?php

return [
    'fullname' => [
        'required' => 'Please enter your full name',
    ],

    'email' => [
        'required' => 'Please enter your email',
        'email' => 'Invalid email format',
    ],

    'phone' => [
        'required' => 'Please enter your phone number',
        'regex' => 'Invalid phone number format',
    ],

    'address' => [
        'required' => 'Please enter your address',
    ],

    'province_code' => [
        'required' => 'Please select a province',
        'in' => 'Invalid province',
    ],

    'ward_code' => [
        'required' => 'Please select a ward',
        'invalid' => 'Invalid ward',
    ],

    'payment_method' => [
        'required' => 'Please select a payment method',
        'exists' => 'Invalid payment method',
    ],

    'voucher_code' => [
        'exists' => 'Invalid voucher code',
    ],
];
