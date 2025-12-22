<?php

return [
    Domains\Core\Enums\DefaultStatus::class => [
        Domains\Core\Enums\DefaultStatus::Published->value => 'Đã xuất bản',
        Domains\Core\Enums\DefaultStatus::Draft->value => 'Bản nháp'
    ],

    Domains\Web\Enums\RewardHistoryStatus::class => [
        Domains\Web\Enums\RewardHistoryStatus::pending->value => 'Chưa trao thưởng',
        Domains\Web\Enums\RewardHistoryStatus::received->value => 'Đã trao thưởng'
    ],

    Domains\Core\Enums\Gender::class => [
        Domains\Core\Enums\Gender::Male->value => 'Nam',
        Domains\Core\Enums\Gender::Female->value => 'Nữ',
        Domains\Core\Enums\Gender::Other->value => 'Khác'
    ],

    Domains\ContactForm\Enums\ContactFormStatus::class => [
        Domains\ContactForm\Enums\ContactFormStatus::Pending->value => 'Chờ liên hệ',
        Domains\ContactForm\Enums\ContactFormStatus::Contacted->value => 'Đã liên hệ',
        Domains\ContactForm\Enums\ContactFormStatus::Spam->value => 'Spam',
    ],
];
