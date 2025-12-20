@accessroute('cms.contactform.edit')
    <button class="btn btn-icon btn-warning open-modal-form" type="button"
        data-route="{{ route('cms.contactform.edit', $id) }}" data-load-dt="true" data-table-id="contactForm">
        <i class="ti ti-edit"></i>
    </button>
@endaccessroute
@accessroute('cms.contactform.delete')
    <button class="btn btn-icon btn-danger open-modal-delete" data-load-dt="true" data-table-id="contactForm"
        data-route="{{ route('cms.contactform.delete', $id) }}" data-target="#modalAjaxDelete">
        <i class="ti ti-trash"></i>
    </button>
@endaccessroute
