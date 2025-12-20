@accessroute('cms.permission.edit')
    <button type="button" data-route="{{ route('cms.permission.edit', $id) }}" class="btn btn-icon btn-warning open-modal-form">
        <i class="ti ti-edit"></i>
    </button>
@endaccessroute
@accessroute('cms.permission.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="permission" data-route="{{ route('cms.permission.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
