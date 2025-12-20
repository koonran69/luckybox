@accessroute('cms.banner.item.edit')
    <button type="button" data-route="{{ route('cms.banner.item.edit', $id) }}" class="btn btn-icon btn-warning open-modal-form">
        <i class="ti ti-edit"></i>
    </button>
@endaccessroute
@accessroute('cms.banner.item.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="attributevalue" data-route="{{ route('cms.banner.item.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
