<div class="col-12 col-md-3">
    <div id="blockSubmit" class="card">
        <div class="card-header">
            @lang('Hành động')
        </div>
        <div class="card-body p-2">
            <div class="">
                <x-core-input-switch name="post[is_featured]" value="1" :label="__('Nổi bật')" />
            </div>
            
        </div>
        <div class="card-footer">
            <div class="d-flex align-items-center h-100 gap-2">
                <button type="submit" class="btn btn-primary" title="@lang('Lưu')" name="submitter" value="save">@lang('Lưu')</button>
                {{-- <button type="submit" class="btn" name="submitter" value="saveAndExit">
                    @lang('Lưu & thoát')
                </button> --}}
            </div>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            @lang('Trạng thái')
        </div>
        <div class="card-body p-2">
            <x-core-select name="post[status]" :required="true">
                @foreach ($status as $key => $value)
                    <x-core-select-option :value="$key" :title="$value" />
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
                <x-core-input-checkbox :depth="$category->depth" name="categories_id[]" :label="$category->title" :value="$category->id" />
            @endforeach
        </div>
    </div>
    
    <div class="card card-sm mt-3">
        <div class="card-header">
            @lang('Thumbnail')
        </div>
        <div class="card-body">
            <x-core-input-image-ckfinder name="post[thumbnail]" showImage="thumbnail" />
        </div>
    </div>
</div>