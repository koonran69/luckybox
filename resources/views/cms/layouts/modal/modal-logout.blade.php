<div class="modal modal-blur fade" id="modalLogout" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="modal-title">@lang('Bạn có chắc?')</div>
                <div>@lang('Nếu tiếp tục, bạn sẽ đăng xuất khỏi hệ thống.')</div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link link-secondary me-auto"
                    data-bs-dismiss="modal">@lang('Hủy')</button>
                <x-core-form :action="route('cms.logout')" type="post">
                    <button type="submit" class="btn btn-danger">@lang('Đăng xuất')</button>
                </x-core-form>
            </div>
        </div>
    </div>
</div>