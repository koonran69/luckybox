<div class="nav-item dropdown">
    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
        aria-label="Open user menu">
        <span class="avatar avatar-sm" style="background-image: url({{ get_auth_admin()->avatar }})"></span>
        <div class="d-none d-xl-block ps-2">
            <div>{{ get_auth_admin()->fullname }}</div>
            <div class="mt-1 small text-secondary">{{ get_auth_admin()->getRoleNames() }}</div>
        </div>
    </a>
    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <a href="{{ route('cms.profile.index') }}" class="dropdown-item">@lang('Profile')</a>
        <a href="{{ route('cms.password.change') }}" class="dropdown-item">@lang('Đổi mật khẩu')</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalLogout">@lang('Đăng xuất')</a>
    </div>
</div>