<div class="col-12 col-md-9">
    <div class="mb-3">
        <label class="form-label required">@lang('Tên sản phẩm')</label>
        <x-core-input name="product[title]" :value="$product->title" :required="true" :placeholder="__('Nhập Tên sản phẩm')" />
    </div>

    @include('cms.products.forms.partials.tab-edit')

    <div class="mt-3">
        <label class="form-label required">@lang('Mô tả ngắn')</label>
        <textarea name="product[short_desc]" class="form-control" :required="true" :placeholder="__('Nhập Mô tả ngắn')">{{ $product->short_desc }}</textarea>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a href="#tabDesc" class="nav-link active" data-bs-toggle="tab" aria-selected="true"
                        role="tab">
                        <span>@lang('Mô tả')</span>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabIngredient" class="nav-link" data-bs-toggle="tab" aria-selected="true"
                        role="tab">
                        <span>@lang('Thành phần')</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane active show" id="tabDesc" role="tabpanel">
                    <textarea name="product[desc]" class="form-control">{{ $product->desc }}</textarea>
                </div>
                <div class="tab-pane" id="tabIngredient" role="tabpanel">
                    <textarea name="product[ingredient]" class="form-control">{{ $product->ingredient }}</textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-body p-0 overflow-hidden">
                    <x-core-input-image-ckfinder name="product[image_left]" :value="$product->image_left" showImage="image_left" />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-body p-0 overflow-hidden">
                    <x-core-input-image-ckfinder name="product[image_right]" :value="$product->image_right" showImage="image_right" />
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="">
                        <label class="form-label">@lang('Vì sao chọn')</label>
                        <textarea name="product[why_choose]" class="form-control ckeditor">{{ $product->why_choose }}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-6">
                            <x-core-input-image-ckfinder name="product[images_double1][]" :value="$product->leftImageDouble()" showImage="images_double1" />
                        </div>
                        <div class="col-6">
                            <x-core-input-image-ckfinder name="product[images_double2][]" :value="$product->rightImageDouble()" showImage="images_double2" />
                        </div>
                    </div>
                    <div class="">
                        <label class="form-label">@lang('Hướng dẫn sử dụng')</label>
                        <textarea name="product[use_guide]" class="form-control ckeditor">{{ $product->use_guide }}</textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
