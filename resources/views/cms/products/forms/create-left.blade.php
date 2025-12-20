<div class="col-12 col-md-9">
    <div class="mb-3">
        <label class="form-label required">@lang('Tên sản phẩm')</label>
        <x-input name="translation[name]" :value="old('translation.name')" :required="true" :placeholder="__('Nhập Tên sản phẩm')" />
    </div>

    @include('cms.products.forms.partials.tab-create')

    <div class="mt-3">
        <label class="form-label required">@lang('Mô tả ngắn')</label>
        <textarea name="translation[short_desc]" :value="old('translation.short_desc')" class="form-control" :required="true" :placeholder="__('Nhập Mô tả ngắn')">{{ old('translation.short_desc') }}</textarea>
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
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane active show" id="tabDesc" role="tabpanel">
                    <textarea name="translation[desc]" class="visually-hidden ckeditor">{{ old('translation.desc') }}</textarea>
                </div>
            </div>
        </div>
    </div>
</div>
