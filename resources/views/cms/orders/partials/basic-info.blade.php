@props(['data'])

<div class="card">
    <div class="card-header">
        @lang('Thông tin cơ bản')
    </div>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label">@lang('Mã đơn hàng')</label>
            <x-core-input name="code" :value="$data->code" readonly />
        </div>
        @if ($data->user)
            <div class="mb-3">
                <label class="form-label">@lang('Tên người dùng')</label>
                <x-core-input name="code" :value="$data->user->fullname" readonly />
            </div>
        @endif
        <div class="mb-3">
            <label class="form-label">@lang('Ngày tạo')</label>
            <x-core-input name="code" :value="utilities()->formatDatetime($data->created_at)" readonly />
        </div>
        <div class="">
            <label class="form-label">@lang('Ghi chú')</label>
            <textarea class="form-control" name="note">{{ $data->note }}</textarea>
        </div>
    </div>
</div> 