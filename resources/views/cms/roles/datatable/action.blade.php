@accessroute('cms.role.edit')
    <a href="{{ route('cms.role.edit', $id) }}" class="btn btn-icon btn-warning">
        <i class="ti ti-edit"></i>
    </a>
@endaccessroute
@accessroute('cms.role.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="role" data-route="{{ route('cms.role.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
