@accessroute('cms.admin.edit')
    <a href="{{ route('cms.admin.edit', $id) }}" class="btn btn-icon btn-warning">
        <i class="ti ti-edit"></i>
    </a>
@endaccessroute
@accessroute('cms.admin.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="admin" data-route="{{ route('cms.admin.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
