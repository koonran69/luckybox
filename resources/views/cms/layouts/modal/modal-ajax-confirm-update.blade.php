<div class="modal modal-blur fade" id="modalAjaxConfirmUpdate" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="modal-title">@lang('Bạn có chắc?')</div>
                <div>@lang('Nếu tiếp tục, hãy nhấn nút tiếp tục!')</div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link link-secondary me-auto"
                    data-bs-dismiss="modal">@lang('Hủy')</button>
                <x-core-form class="ajax-modal-form" action="#" type="put">
                    <button type="submit" class="btn btn-primary">@lang('Tiếp tục')</button>
                </x-core-form>
            </div>
        </div>
    </div>
</div>