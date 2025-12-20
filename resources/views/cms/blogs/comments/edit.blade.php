<div class="modal fade modal-load-ajax" tabindex="-1">
    <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content">
            <x-core-form class="ajax-modal-form" data-load-dt="true" data-table-id="pReview" action="{{ route('cms.post_comment.update') }}" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$data->id" />
                <div class="modal-header">
                    <h5 class="modal-title">@lang('Sửa')</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="">
                        @foreach ($status as $key => $value)
                            <x-core-input-radio name="status" :checked="$data->status->value" :value="$key" :label="$value" />
                        @endforeach
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">@lang('Đóng')</button>
                    <button type="submit" class="btn btn-primary">@lang('Cập nhật')</button>
                </div>
            </x-core-form>
        </div>
    </div>
</div>