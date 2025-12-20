<div class="modal fade modal-load-ajax" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <x-core-form class="ajax-modal-form" data-load-dt="true" data-table-id="productCat" action="{{ route('cms.product_category.store') }}" type="post" :validate="true">
                <div class="modal-header">
                    <h5 class="modal-title">@lang('Thêm')</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label class="form-label required">@lang('Tên danh mục')</label>
                                <x-input name="name" :value="old('name')" :required="true" :placeholder="__('Tên danh mục')" />
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <label class="form-label required">@lang('Trạng thái')</label>
                            <x-select name="status" :required="true">
                                @foreach ($status as $key => $value)
                                    <x-select-option :value="$key" :title="$value" />
                                @endforeach
                            </x-select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">@lang('Danh mục cha'):</label>
                            <x-select class="select2-bs5" name="parent_id">
                                <x-select-option value="" :title="__('Trống')" />
                                @foreach ($categories as $category)
                                    <x-select-option :value="$category->id"
                                        :title="str_repeat('-', $category->depth) . ' ' . $category->name"
                                    />
                                @endforeach
                            </x-select>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="mb-3">
                                <label class="form-label">@lang('Thumbnail')</label>
                                <x-input-image-ckfinder name="thumbnail" showImage="thumbnail" />
                            </div>
                        </div>
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