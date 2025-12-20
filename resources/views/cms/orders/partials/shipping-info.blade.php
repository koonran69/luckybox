@props(['data', 'shipping'])

<div class="card">
    <div class="card-header">
        @lang('Thông tin vận chuyển')
    </div>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label">@lang('Tên')</label>
            <x-core-input name="fullname" :value="$data->fullname" />
        </div>
        <div class="mb-3">
            <label class="form-label">@lang('Email')</label>
            <x-core-input name="email" :value="$data->email" />
        </div>
        <div class="mb-3">
            <label class="form-label">@lang('Số điện thoại')</label>
            <x-core-input name="phone" :value="$data->phone" />
        </div>
        <div class="mb-3">
            <label class="form-label">@lang('Địa chỉ')</label>
            <x-core-input name="address_full" :value="$data->address_full" />
        </div>
    </div>
</div> 