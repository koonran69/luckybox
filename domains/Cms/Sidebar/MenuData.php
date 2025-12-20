<?php

return [
    [
        'title' => 'Dashboard',
        'route_name' => 'cms.dashboard',
        'icon' => '<i class="ti ti-home"></i>',
        'sub' => []
    ],

    [
        'title' => 'ECommerce',
        'route_name' => '',
        'icon' => '<i class="ti ti-building-store"></i>',
        'sub' => [
            [
                'title' => 'Đơn hàng',
                'route_name' => 'cms.order.index',
                'icon' => '<i class="ti ti-shopping-cart"></i>'
            ],

            [
                'title' => 'Voucher',
                'route_name' => 'cms.voucher.index',
                'icon' => '<i class="ti ti-ticket"></i>',
                'sub' => []
            ],

            [
                'title' => 'Đánh giá',
                'route_name' => 'cms.product_review.index',
                'icon' => '<i class="ti ti-star"></i>'
            ],
        ]
    ],

    [
        'title' => 'Sản phẩm',
        'route_name' => '',
        'icon' => '<i class="ti ti-package"></i>',
        'sub' => [
            [
                'title' => 'Danh sách',
                'route_name' => 'cms.product.index',
                'icon' => '<i class="ti ti-list"></i>'
            ],

            [
                'title' => 'Danh mục',
                'route_name' => 'cms.product_category.index',
                'icon' => '<i class="ti ti-category"></i>'
            ],
        ]
    ],

    [
        'title' => 'Blog',
        'route_name' => '',
        'icon' => '<i class="ti ti-article"></i>',
        'sub' => [
            [
                'title' => 'Thêm bài viết',
                'route_name' => 'cms.post.create',
                'icon' => '<i class="ti ti-plus"></i>'
            ],
            [
                'title' => 'Danh sách',
                'route_name' => 'cms.post.index',
                'icon' => '<i class="ti ti-list"></i>'
            ],
            [
                'title' => 'Chuyên mục',
                'route_name' => 'cms.post_category.index',
                'icon' => '<i class="ti ti-category"></i>'
            ],
            [
                'title' => 'Bình luận',
                'route_name' => 'cms.post_comment.index',
                'icon' => '<i class="ti ti-message"></i>'
            ]
        ],
    ],
    [
        'title' => 'Quản lý dữ liệu',
        'route_name' => '',
        'icon' => '<i class="ti ti-database"></i>',
        'sub' => [
            [
                'title' => 'Banner',
                'route_name' => 'cms.banner.index',
                'icon' => '<i class="ti ti-list"></i>'
            ],

            [
                'title' => 'Liên hệ',
                'route_name' => 'cms.setting.index',
                'icon' => '<i class="ti ti-address-book"></i>',
                'param' => [
                    'group' => Domains\Core\Enums\Setting\SettingGroup::Contact->value,
                ],
            ],

            [
                'title' => 'SEO',
                'route_name' => 'cms.setting.index',
                'icon' => '<i class="ti ti-seo"></i>',
                'param' => [
                    'group' => Domains\Core\Enums\Setting\SettingGroup::Seo->value,
                ],
            ],
            
        ],
    ],

    [
        'title' => 'Contact form',
        'route_name' => 'cms.contactform.index',
        'icon' => '<i class="ti ti-address-book"></i>',
        'sub' => []
    ],

    [
        'title' => 'Người dùng',
        'route_name' => 'cms.user.index',
        'icon' => '<i class="ti ti-user"></i>',
        'sub' => []
    ],
    
    [
        'title' => 'Admins',
        'route_name' => '',
        'icon' => '<i class="ti ti-user"></i>',
        'sub' => [
            [
                'title' => 'Thêm',
                'route_name' => 'cms.admin.create',
                'icon' => '<i class="ti ti-plus"></i>'
            ],
            [
                'title' => 'Danh sách',
                'route_name' => 'cms.admin.index',
                'icon' => '<i class="ti ti-list"></i>'
            ],

            [
                'title' => 'Quyền',
                'route_name' => 'cms.permission.index',
                'icon' => '<i class="ti ti-list"></i>'
            ],

            [
                'title' => 'Vai trò',
                'route_name' => 'cms.role.index',
                'icon' => '<i class="ti ti-list"></i>'
            ],
        ]
    ],

    [
        'title' => 'Cài đặt',
        'route_name' => '',
        'icon' => '<i class="ti ti-settings"></i>',
        'sub' => [
            [
                'title' => 'Chung',
                'route_name' => 'cms.setting.index',
                'icon' => '<i class="ti ti-tool"></i>',
                'param' => [
                    'group' => Domains\Core\Enums\Setting\SettingGroup::General->value,
                ],
            ],
        ]
    ]
];