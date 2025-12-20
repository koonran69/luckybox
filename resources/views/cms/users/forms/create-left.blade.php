<div class="col-12 col-md-9">
    <div class="card">
        <div class="row card-body">
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Email')</label>
                    <x-core-input-email name="email" :value="old('email')" :required="true" />
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Họ và tên')</label>
                    <x-core-input name="fullname" :value="old('fullname')" :required="true"
                        :placeholder="__('Họ và tên')" />
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Mật khẩu')</label>
                    <x-core-input-password name="password" :required="true" />
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Nhập lại mật khẩu')</label>
                    <x-core-input-password name="password_confirmation" :required="true"
                        data-parsley-equalto="input[name='password']"
                        data-parsley-equalto-message="{{ trans('passwordMismatch') }}" />
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Số điện thoại')</label>
                    <x-core-input-phone name="phone" :value="old('phone')" :required="true" />
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="mb-3">
                    <label class="form-label">@lang('Ngày sinh')</label>
                    <x-core-input type="date" name="birthday" :value="old('birthday')" />
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Giới tính')</label>
                    <x-core-select name="gender" :required="true">
                        @foreach ($gender as $key => $value)
                            <x-core-select-option :value="$key" :title="$value" />
                        @endforeach
                    </x-core-select>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-4 col-12 mb-3 mb-md-0">
                    <label class="form-label">@lang('Tỉnh/TP')</label>
                    <div class="wrap-select2">
                        <x-core-select class="select2-bs5-ajax-many select2-condition" name="province_code" :data-url="route('search_area.province')"
                            data-condition="select[name='district_code']" data-param="province_code" :placeholder="trans('Chọn Tỉnh/TP')"></x-core-select>
                    </div>
                </div>

                <div class="col-md-4 col-12 mb-3 mb-md-0">
                    <label class="form-label">@lang('Quận/Huyện')</label>
                    <div class="wrap-select2">
                        <x-core-select class="select2-bs5-ajax-many select2-condition" name="district_code" :data-url="route('search_area.district', ['hrv_province_id' => 0])"
                            data-condition="select[name='ward_code']" data-param="district_code" :placeholder="trans('Chọn Quận/Huyện')"></x-core-select>
                    </div>
                </div>

                <div class="col-md-4 col-12">
                    <label class="form-label">@lang('Phường xã')</label>
                    <div class="wrap-select2">
                        <x-core-select class="select2-bs5-ajax-many" name="ward_code" :data-url="route('search_area.ward', ['hrv_district_id' => 0])" :placeholder="trans('Chọn Phường/Xã')"></x-core-select>
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <label class="form-label">@lang('Địa chỉ')</label>
                    <x-core-input name="address" :value="old('address')" :placeholder="__('VD: 165 D5')" />
                </div>
            </div>
        </div>
    </div>
</div>