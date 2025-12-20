<div class="col-12 col-md-3">
    <div id="blockSubmit" class="card">
        <div class="card-header">
            @lang('Hành động')
        </div>
        <div class="card-body p-2">
            <div class="">
                <x-core-input-switch :checked="$product->is_bestseller" name="product[is_bestseller]" value="1" :label="__('Bestseller')" />
            </div>
        </div>
        <div class="card-footer p-2 d-flex justify-content-between">
            <div class="d-flex align-items-center h-100 gap-2">
                <button type="submit" class="btn btn-primary" title="@lang('Lưu')" name="submitter" value="save">@lang('Lưu')</button>
            </div>
            <button type="button" class="btn btn-danger open-modal-delete" data-route="{{ route('cms.product.delete', $product->id) }}" data-target="#modalDelete">
                <i class="ti ti-trash"></i>
            </button>
        </div>
    </div>

    <div class="card mt-3">
            <div class="card-header">
                @lang('status')
            </div>
            <div class="card-body p-2">
                <x-core-select name="product[status]" :required="true">
                    @foreach ($status as $key => $value)
                        <x-core-select-option :selected="$product->status->value" :value="$key" :title="$value" />
                    @endforeach
                </x-core-select>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header justify-content-between">
                @lang('Danh mục')
            </div>
            <div class="card-body p-2 wrap-list-checkbox">
                @foreach ($categories as $category)
                    <x-core-input-checkbox :checked="$product->categories->pluck('id')->toArray()" :depth="$category->depth" name="categories_id[]" :label="$category->title" :value="$category->id" />
                @endforeach
            </div>
        </div>
        
        <div class="card card-sm mt-3">
            <div class="card-header">
                @lang('Thumbnail')
            </div>
            <div class="card-body">
                <x-core-input-image-ckfinder name="product[thumbnail]" :value="$product->thumbnail" showImage="thumbnail" />
            </div>
        </div>

        <div class="card card-sm mt-3">
            <div class="card-header">
                @lang('Gallery')
            </div>
            <div class="card-body">
                <x-core-input-gallery-ckfinder name="product[gallery]" :value="$product->gallery?->toArray()" showImage="gallery" />
            </div>
        </div>
</div>