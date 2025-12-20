@accessroute('cms.post.edit')
    <a href="{{ route('cms.post.edit', $id) }}" class="btn btn-icon btn-warning">
        <i class="ti ti-edit"></i>
    </a>
@endaccessroute
@accessroute('cms.post.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="post" data-route="{{ route('cms.post.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
