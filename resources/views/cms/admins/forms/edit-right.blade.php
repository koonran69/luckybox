<div class="col-12 col-md-3">
    <div id="blockSubmit" class="card">
        <div class="card-header">
            @lang('Hành động')
        </div>
        <div class="card-body p-2 d-flex justify-content-between">
            <div class="d-flex align-items-center h-100 gap-2">
                <button type="submit" class="btn btn-primary" title="@lang('Lưu')" name="submitter" value="save">@lang('Lưu')</button>
                <button type="submit" class="btn" name="submitter" value="saveAndExit">
                    @lang('Lưu & thoát')
                </button>
            </div>
            <button type="button" class="btn btn-danger open-modal-delete" data-route="{{ route('cms.admin.delete', $admin->id) }}"  data-target="#modalDelete">
                <i class="ti ti-trash"></i>
            </button>
        </div>
    </div>
    <div class="card mt-3">
        <div class="card-body p-2">
            <x-core-input-switch name="admin[is_superadmin]" :checked="$admin->is_superadmin" :value="true" :label="trans('Super Admin')" />
        </div>
    </div>
</div>