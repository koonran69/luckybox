<?php

return [
    'participation' => [

        'fullname' => [
            'required' => 'Vui lòng nhập họ và tên.',
            'string'   => 'Họ và tên không hợp lệ.',
        ],

        'phone' => [
            'required' => 'Vui lòng nhập số điện thoại.',
            'regex'    => 'Số điện thoại không đúng định dạng.',
            'unique'   => 'Số điện thoại này đã được sử dụng.',
        ],

        'email' => [
            'required' => 'Vui lòng nhập email.',
            'email'    => 'Email không đúng định dạng.',
            'unique'   => 'Email này đã được sử dụng.',
        ],

        'gender' => [
            'enum' => 'Giới tính không hợp lệ.',
        ],

        'age' => [
            'string' => 'Độ tuổi không hợp lệ.',
        ],

        'address' => [
            'string' => 'Địa chỉ không hợp lệ.',
        ],
    ],

];
