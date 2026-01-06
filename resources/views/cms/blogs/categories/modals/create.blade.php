<div class="modal fade modal-load-ajax" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <x-core-form class="ajax-modal-form" data-load-dt="true" data-table-id="postCat" action="{{ route('cms.post_category.store') }}" type="post" :validate="true">
                <div class="modal-header">
                    <h5 class="modal-title">@lang('Thêm')</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label class="form-label required">@lang('Tên danh mục')</label>
                                <x-core-input name="title" :value="old('title')" :required="true" :placeholder="__('Tên danh mục')" />
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <label class="form-label required">@lang('Trạng thái')</label>
                            <x-core-select name="status" :required="true">
                                @foreach ($status as $key => $value)
                                    <x-core-select-option :value="$key" :title="$value" />
                                @endforeach
                            </x-core-select>
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <label class="form-label required">@lang('Meta SEO')</label>
                                <textarea name="meta_seo" :value="old('meta_seo')"></textarea>
                            </div>
                        </div>
                        {{-- <div class="col-md-12 col-12">
                            <div class="mb-3">
                                <label class="form-label">@lang('parent'):</label>
                                <x-select class="select2-bs5" name="parent_id">
                                    <x-core-select-option value="" :title="__('empty')" />
                                    @foreach ($categories as $category)
                                        <x-core-select-option :value="$category->id"
                                            :title="generate_text_depth_tree($category->depth) . ' ' . __($category->name)"
                                        />
                                    @endforeach
                                </x-select>
                            </div>
                        </div> --}}
                        {{-- <div class="col-md-6 col-12">
                            <div class="mb-3">
                                <label class="form-label">@lang('Thumbnail')</label>
                                <x-core-input-image-ckfinder name="feature_image" showImage="featureImage" />
                            </div>
                        </div> --}}
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