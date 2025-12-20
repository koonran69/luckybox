<?php

return [
    Domains\Core\Enums\DefaultStatus::class => [
        Domains\Core\Enums\DefaultStatus::Published->value => 'Đã xuất bản',
        Domains\Core\Enums\DefaultStatus::Draft->value => 'Bản nháp'
    ],

    Domains\Voucher\Enums\VoucherStatus::class => [
        Domains\Voucher\Enums\VoucherStatus::Inactive->value => 'Chưa bắt đầu',
        Domains\Voucher\Enums\VoucherStatus::Active->value => 'Đang hoạt động',
        Domains\Voucher\Enums\VoucherStatus::Expired->value => 'Hết hạn',
    ],

    Domains\Voucher\Enums\VoucherType::class => [
        Domains\Voucher\Enums\VoucherType::Fixed->value => 'Giảm cố định',
        Domains\Voucher\Enums\VoucherType::Percentage->value => 'Giảm phần trăm',
    ],

    Domains\Order\Enums\OrderStatus::class => [
        Domains\Order\Enums\OrderStatus::Pending->value => 'Chờ xử lý',
        Domains\Order\Enums\OrderStatus::Paid->value => 'Đã thanh toán',
        Domains\Order\Enums\OrderStatus::Shipping->value => 'Đang vận chuyển',
        Domains\Order\Enums\OrderStatus::Completed->value => 'Hoàn thành',
        Domains\Order\Enums\OrderStatus::Failed->value => 'Thất bại',
        Domains\Order\Enums\OrderStatus::Cancelled->value => 'Đã hủy'
    ],

    Domains\Product\Enums\ReviewStatus::class => [
        Domains\Product\Enums\ReviewStatus::Pending->value => 'Chờ duyệt',
        Domains\Product\Enums\ReviewStatus::Accept->value => 'Đã duyệt',
        Domains\Product\Enums\ReviewStatus::Reject->value => 'Spam',
    ],

    Domains\ContactForm\Enums\ContactFormStatus::class => [
        Domains\ContactForm\Enums\ContactFormStatus::Pending->value => 'Chờ liên hệ',
        Domains\ContactForm\Enums\ContactFormStatus::Contacted->value => 'Đã liên hệ',
        Domains\ContactForm\Enums\ContactFormStatus::Spam->value => 'Spam',
    ],
];