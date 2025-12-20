{{-- <div class="row mb-3">
    <label class="col-4 col-form-label">@lang('Mã sản phẩm')</label>
    <div class="col">
        <x-input name="product[sku]" :placeholder="trans('Mã sản phẩm')" />
    </div>
</div> --}}
<div class="row mb-3">
    <label class="col-4 col-form-label">@lang('Giá thường')</label>
    <div class="col">
        <x-input name="translation[price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
    </div>
</div>
<div class="row mb-3">
    <label class="col-4 col-form-label">@lang('Giá khuyến mãi')</label>
    <div class="col">
        <x-input name="translation[discount_price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
    </div>
</div>