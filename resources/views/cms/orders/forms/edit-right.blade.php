<div class="col-12 col-md-3">
    <div id="blockSubmit" class="card">
        <div class="card-header">
            @lang('Hành động')
        </div>
        <div class="card-body p-2 d-flex justify-content-between">
            <div class="d-flex align-items-center h-100 gap-2">
                <button type="submit" class="btn btn-primary" title="@lang('Lưu')" name="submitter"
                    value="save">@lang('Lưu')</button>
            </div>
            <button type="button" class="btn btn-danger open-modal-delete"
                data-route="{{ route('cms.order.delete', $data->id) }}" data-target="#modalDelete">
                <i class="ti ti-trash"></i>
            </button>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            @lang('Haravan')
            @if ($data->hrv_id)
                <span class="ms-2 badge bg-green-lt">@lang('Đã đồng bộ')</span>
            @else
                <span class="ms-2 badge bg-warning-lt">@lang('Chưa đồng bộ')</span>
            @endif
        </div>
        <div class="card-body p-2">
            <button type="submit" class="btn bg-indigo text-indigo-fg" title="@lang('Lưu')" name="submitter"
                value="syncHrv">@lang('Đồng bộ')</button>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            @lang('Trạng thái')
        </div>
        <div class="card-body p-2">
            <x-core-select name="status" :required="true">
                @foreach ($status as $key => $value)
                    <x-core-select-option :selected="$data->status->value" :value="$key" :title="$value" />
                @endforeach
            </x-core-select>
        </div>
    </div>
</div>
