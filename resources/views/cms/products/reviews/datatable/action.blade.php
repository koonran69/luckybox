
@accessroute('cms.product_review.edit')
    <button type="button" data-route="{{ route('cms.product_review.edit', $id) }}" data-load-dt="true" data-table-id="pReview" class="btn btn-icon btn-warning open-modal-form">
        <i class="ti ti-edit"></i>
    </button>
@endaccessroute
@accessroute('cms.product_review.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="pReview" data-route="{{ route('cms.product_review.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
