@accessroute('cms.product.edit')
    <a href="{{ route('cms.product.edit', $id) }}" class="btn btn-icon btn-warning">
        <i class="ti ti-edit"></i>
    </a>
@endaccessroute
{{-- @accessroute('cms.product.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="productCat" data-route="{{ route('cms.product.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute --}}
