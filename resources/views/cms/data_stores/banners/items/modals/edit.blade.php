<div class="modal fade modal-load-ajax" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <x-core-form class="ajax-modal-form" data-load-dt="true" data-table-id="bannerItem" action="{{ route('cms.banner.item.update') }}" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$data->id" />
                <div class="modal-header">
                    <h5 class="modal-title">@lang('Sửa')</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">@lang('Tiêu đề')</label>
                        <x-core-input name="title" :value="$data->title" :placeholder="__('Tiêu đề')" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">@lang('Mô tả ngắn')</label>
                        <textarea class="form-control" name="subtitle" :placeholder="__('Mô tả ngắn')">{{ $data->subtitle }}</textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">@lang('Đường dẫn')</label>
                        <x-core-input name="link" :value="$data->link" :placeholder="__('Đường dẫn liên kết')" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">@lang('Loại')</label>
                        <x-core-select name="type" :required="true">
                            @foreach ($type as $key => $value)
                                <x-core-select-option :selected="$data->type->value" :value="$key" :title="$value" />
                            @endforeach
                        </x-core-select>
                    </div>
                    <div id="imageType"  @style(['display: none;' => !$data->isImage()])>
                        <div class="mb-3 w-100">
                            <label class="form-label">@lang('Hình desktop')</label>
                            <x-core-input-image-ckfinder name="image_desktop" :value="$data->image_desktop" showImage="imageDesktop" />
                        </div>
                        <div class="mb-3 w-50 d-none">
                            <label class="form-label">@lang('Hình Mobile')</label>
                            <x-core-input-image-ckfinder name="image_mobile" :value="$data->image_mobile" showImage="imageMobile" />
                        </div>
                    </div>
                    <div class="mb-3 w-100" id="videoType"  @style(['display: none;' => $data->isImage()])>
                        <label class="form-label">@lang('Video')</label>
                        <x-core-input-file-ckfinder name="video" :value="$data->video" />
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">@lang('Đóng')</button>
                    <button type="submit" class="btn btn-primary">@lang('Lưu')</button>
                </div>
            </x-core-form>
        </div>
    </div>
</div>