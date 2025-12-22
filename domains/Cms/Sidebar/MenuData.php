<?php

return [
    [
        'title' => 'Dashboard',
        'route_name' => 'cms.dashboard',
        'icon' => '<i class="ti ti-home"></i>',
        'sub' => []
    ],

    [
        'title' => 'Cấu hình phần thưởng',
        'route_name' => 'cms.reward.index',
        'icon' => '<i class="ti ti-gift"></i>',
        'sub' => []
    ],

    [
        'title' => 'Người tham gia',
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