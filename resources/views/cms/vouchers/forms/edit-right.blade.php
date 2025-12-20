<div class="col-12 col-md-3">
    <div id="blockSubmit" class="card mb-3">
        <div class="card-header">
            @lang('Hành động')
        </div>
        <div class="card-body p-2 d-flex justify-content-between">
            <div class="d-flex align-items-center h-100 gap-2">
                <button type="submit" class="btn btn-primary" title="@lang('Lưu')" name="submitter"
                    value="save">@lang('Lưu')</button>
                {{-- <button type="submit" class="btn" name="submitter" value="saveAndExit">
                    @lang('Lưu & thoát')
                </button> --}}
            </div>
            <button type="button" class="btn btn-danger open-modal-delete"
                data-route="{{ route('cms.voucher.delete', $data->id) }}" data-target="#modalDelete">
                <i class="ti ti-trash"></i>
            </button>
        </div>
    </div>

    <div class="card mb-3">
        <div class="card-header">
            @lang('Trạng thái')
        </div>
        <div class="card-body p-2">
            <x-core-select name="status" :required="true">
                @foreach ($status as $key => $value)
                    <x-core-select-option :value="$key" :title="$value" :selected="$data->status->value" />
                @endforeach
            </x-core-select>
        </div>
    </div>
    
</div>
