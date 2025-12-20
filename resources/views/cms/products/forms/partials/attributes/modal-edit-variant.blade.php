<div class="modal fade modal-load-ajax" tabindex="-1">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <x-core-form id="editPV" action="{{ route('cms.product_variant.update') }}" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$pv->id" />
                <div class="modal-header">
                    <h5 class="modal-title">@lang('Edit')</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 col-md-3 mb-3">
                            <label class="form-label">@lang('Thumbnail')</label>
                            <x-core-input-image-ckfinder name="thumbnail" :value="$pv->thumbnail" showImage="thumbnail" />
                        </div>
                        <div class="col-6 col-md-9 mb-3">
                            <label class="form-label">@lang('Tên biến thể')</label>
                            <x-core-input name="title" :value="$pv->title" :required="true" :placeholder="__('Tên biến thể')" />
                        </div>
                        <div class="col-6 mb-3">
                            <label class="form-label">@lang('Giá bán')</label>
                            <x-core-input name="price" class="inp-number-format" :value="number_format($pv->price)" :required="true" />
                        </div>
                        <div class="col-6 mb-3">
                            <label class="form-label">@lang('Giá so sánh')</label>
                            <x-core-input name="compare_at_price" class="inp-number-format" :value="$pv->compare_at_price ? number_format($pv->compare_at_price) : null" />
                        </div>
                        <div class="col-6 mb-3">
                            <label class="form-label">@lang('Khối lượng')</label>
                            <div class="input-group">
                                <x-core-input-number name="grams" :value="$pv->grams" :required="true" />
                                <span class="input-group-text">grams</span>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <label class="form-label">@lang('Tồn kho')</label>
                            <x-core-input-number name="qty" :value="$pv->qty" :required="true" />
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