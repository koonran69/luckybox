
@accessroute('cms.order.edit')
    <a href="{{ route('cms.order.edit', $id) }}" class="btn btn-icon btn-warning">
        <i class="ti ti-edit"></i>
    </a>
@endaccessroute
@accessroute('cms.order.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="pReview" data-route="{{ route('cms.order.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
