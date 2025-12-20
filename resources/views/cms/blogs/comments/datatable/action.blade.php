
@accessroute('cms.post_comment.edit')
    <button type="button" data-route="{{ route('cms.post_comment.edit', $id) }}" data-load-dt="true" data-table-id="postComment" class="btn btn-icon btn-warning open-modal-form">
        <i class="ti ti-edit"></i>
    </button>
@endaccessroute
@accessroute('cms.post_comment.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="postComment" data-route="{{ route('cms.post_comment.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
