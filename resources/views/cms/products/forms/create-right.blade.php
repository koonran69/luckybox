<div class="col-12 col-md-3">
    <div id="blockSubmit" class="card">
        <div class="card-header">
            @lang('Hành động')
        </div>
        <div class="card-body p-2">
            {{-- <div class="">
                <x-input-switch name="product[is_featured]" value="1" :label="__('Nổi bật')" />
            </div> --}}
        </div>
        <div class="card-footer p-2">
            <div class="d-flex align-items-center h-100 gap-2">
                <button type="submit" class="btn btn-primary" title="@lang('Lưu')" name="submitter" value="save">@lang('Lưu')</button>
            </div>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            @lang('Trạng thái')
        </div>
        <div class="card-body p-2">
            <x-select name="product[status]" :required="true">
                @foreach ($status as $key => $value)
                    <x-select-option :value="$key" :title="$value" />
                @endforeach
            </x-select>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header justify-content-between">
            @lang('Danh mục')
        </div>
        <div class="card-body p-2 wrap-list-checkbox">
            @foreach ($categories as $category)
                <x-input-checkbox :depth="$category->depth" name="categories_id[]" :label="$category->translation->name" :value="$category->id" />
            @endforeach
        </div>
    </div>

    <div class="card card-sm mt-3">
        <div class="card-header">
            @lang('Thumbnail')
        </div>
        <div class="card-body">
            <x-input-image-ckfinder name="product[thumbnail]" showImage="thumbmail" />
        </div>
    </div>

    <div class="card card-sm mt-3">
        <div class="card-header">
            @lang('Gallery')
        </div>
        <div class="card-body">
            <x-input-gallery-ckfinder name="product[gallery]" showImage="gallery" />
        </div>
    </div>
</div>