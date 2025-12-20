<div class="col-12 col-md-9">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <!-- Email Address -->
                <div class="col-md-6 col-12">
                    <div class="mb-3">
                        <label class="form-label required">@lang('Email')</label>
                        <x-core-input-email name="email" :value="$data->email" :required="true" />
                    </div>
                </div>
                <!-- Fullname -->
                <div class="col-md-6 col-12">
                    <div class="mb-3">
                        <label class="form-label required">@lang('Họ và tên')</label>
                        <x-core-input name="fullname" :value="$data->fullname" :required="true" :placeholder="__('Họ và tên')" />
                    </div>
                </div>
                <!-- new password -->
                <div class="col-md-6 col-12">
                    <div class="mb-3">
                        <label class="form-label required">@lang('Mật khẩu')</label>
                        <x-core-input-password name="password" />
                    </div>
                </div>
                <!-- new password confirmation-->
                <div class="col-md-6 col-12">
                    <div class="mb-3">
                        <label class="form-label required">@lang('Nhập lại mật khẩu')</label>
                        <x-core-input-password name="password_confirmation"
                            data-parsley-equalto="input[name='password']"
                            data-parsley-equalto-message="{{ __('passwordMismatch') }}" />
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="mb-3">
                        <label class="form-label required">@lang('Số điện thoại')</label>
                        <x-core-input-phone name="phone" :value="$data->phone" :required="true" />
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="mb-3">
                        <label class="form-label">@lang('Ngày sinh')</label>
                        <x-core-input type="date" name="birthday" :value="$data->birthday" />
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="mb-3">
                        <label class="form-label required">@lang('Giới tính')</label>
                        <x-core-select name="gender" :required="true">
                            @foreach ($gender as $key => $value)
                                <x-core-select-option :selected="$data->gender?->value" :value="$key" :title="$value" />
                            @endforeach
                        </x-core-select>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-4 col-12 mb-3 mb-md-0">
                    <label class="form-label">@lang('Tỉnh/TP')</label>
                    <div class="wrap-select2">
                        <x-core-select class="select2-bs5-ajax-many select2-condition" name="province_code"
                            :data-url="route('search_area.province')" data-condition="select[name='district_code']" data-param="province_code"
                            :placeholder="trans('Chọn Tỉnh/TP')">
                            @if ($data->province_code)
                                <x-core-select-option :selected="$data->province_code" :value="$data->province_code" :title="$data->province->name" />
                            @endif
                        </x-core-select>
                    </div>
                </div>

                <div class="col-md-4 col-12 mb-3 mb-md-0">
                    <label class="form-label">@lang('Quận/Huyện')</label>
                    <div class="wrap-select2">
                        <x-core-select class="select2-bs5-ajax-many select2-condition" name="district_code"
                            :data-url="route('search_area.district', ['hrv_province_id' => 0])" data-condition="select[name='ward_code']" data-param="district_code"
                            :placeholder="trans('Chọn Quận/Huyện')">
                            @if ($data->district_code)
                                <x-core-select-option :selected="$data->district_code" :value="$data->district_code" :title="$data->district->name" />
                            @endif
                        </x-core-select>
                    </div>
                </div>

                <div class="col-md-4 col-12">
                    <label class="form-label">@lang('Phường xã')</label>
                    <div class="wrap-select2">
                        <x-core-select class="select2-bs5-ajax-many" name="ward_code" :data-url="route('search_area.ward', ['hrv_district_id' => 0])"
                            :placeholder="trans('Chọn Phường/Xã')">
                            @if ($data->ward_code)
                                <x-core-select-option :selected="$data->ward_code" :value="$data->ward_code" :title="$data->ward->name" />
                            @endif
                        </x-core-select>
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <label class="form-label">@lang('Địa chỉ')</label>
                    <x-core-input name="address" :value="$data->address" :placeholder="__('VD: 165 D5')" />
                </div>
            </div>
        </div>
    </div>
</div>
