<div class="col-12 col-md-9">
    <div class="card">
        <div class="row card-body">
            <!-- Email Address -->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Email')</label>
                    <x-core-input-email name="admin[email]" :value="$admin->email" :required="true" />
                </div>
            </div>
            <!-- Fullname -->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Họ và tên')</label>
                    <x-core-input name="admin[fullname]" :value="$admin->fullname" :required="true" :placeholder="__('Họ và tên')" />
                </div>
            </div>
            <!-- new password -->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Mật khẩu')</label>
                    <x-core-input-password name="admin[password]" />
                </div>
            </div>
            <!-- new password confirmation-->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Nhập lại mật khẩu')</label>
                    <x-core-input-password name="admin[password_confirmation]"
                        data-parsley-equalto="input[name='admin[password]']"
                        data-parsley-equalto-message="{{ __('passwordMismatch') }}" />
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Số điện thoại')</label>
                    <x-core-input-phone name="admin[phone]" :value="$admin->phone" :required="true" />
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label">@lang('Ngày sinh')</label>
                    <x-core-input type="date" name="admin[birthday]" :value="$admin->birthday" />
                </div>
            </div>
        </div>
    </div>
    <div id="rolePermission" @style([
        'display: none' => $admin->checkIsSuperAdmin()
    ])>
        <div class="row mt-3">
            <div class="col-12 col-md-6">
                <div class="card mt-3">
                    <div class="row card-body">
                        <div class="col-12">
                            <label for="" class="form-label">@lang('Danh sách vai trò'):</label>
                            <div class="row">
                                @foreach ($roles as $role)
                                    <div class="col-6">
                                        <x-core-input-switch name="roles[]" :checked="$admin_has_roles" value="{{ $role->id }}"
                                            :label="$role->name" />
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card mt-3">
                    <div class="row card-body">
                        <div class="col-12">
                            <label for="" class="form-label">@lang('Danh sách quyền'):</label>
                            <div class="row">
                                @foreach ($permissions as $permission)
                                    <div class="col-6">
                                        <x-core-input-switch name="permissions[]" :checked="$admin_has_permissions"
                                            value="{{ $permission->id }}" :label="$permission->name" />
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
