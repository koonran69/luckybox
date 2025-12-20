@accessroute('cms.post_category.edit')
    <button type="button" data-route="{{ route('cms.post_category.edit', $id) }}" class="btn btn-icon btn-warning open-modal-form">
        <i class="ti ti-edit"></i>
    </button>
@endaccessroute
@accessroute('cms.post_category.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="postCat" data-route="{{ route('cms.post_category.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
