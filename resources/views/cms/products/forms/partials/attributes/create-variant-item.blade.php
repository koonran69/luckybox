@php
    $key = uniqid_real(6);
@endphp
<div class="accordion-item">
    <div class="accordion-header justify-content-between">

        <div class="d-flex gap-1 w-100 ps-2">
            @foreach ($attrs as $attr)
                <div class="col-6 col-md-4">
                    <x-input type="hidden" name="variant[{{ $key }}][attribute][{{ $attr->id }}][attribute_id]" :value="$attr->id" />
                    <x-select name="variant[{{ $key }}][attribute][{{ $attr->id }}][attribute_value_id]">
                        <x-select-option value="" :title="trans('Bất kỳ :attr', ['attr' => $attr->name])" />
                        @foreach ($attr->values as $item )
                            <x-select-option :value="$item->id" :title="$item->name" />
                        @endforeach
                    </x-select>
                </div>
            @endforeach
        </div>

        <div class="col">
            <button type="button" class="btn btn-sm btn-outline-danger remove-attr-value">
                @lang('Xoá')
            </button>
        </div>
        <div class="col-auto">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accorVariant{{ $key }}">
                <div class="accordion-button-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-1">
                        <path d="M6 9l6 6l6 -6"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>

    <div id="accorVariant{{ $key }}" class="accordion-collapse collapse">
        <div class="accordion-body">
            <div class="row mb-3">
                <div class="col-12 col-md-4">
                    <x-input-image-ckfinder name="variant[{{ $key }}][thumbnail]" showImage="variantThumbnail{{ $key }}" />
                </div>
                <div class="col-12 col-md-8">
                    <div class="mb-3">
                        <label class="form-label">@lang('Mã sản phẩm')</label>
                        <x-input name="variant[{{ $key }}][sku]" :placeholder="trans('Mã sản phẩm')" />
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <label class="form-label">@lang('Giá thường')</label>
                            <x-input name="variant[{{ $key }}][price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="form-label">@lang('Giá khuyến mãi')</label>
                            <x-input name="variant[{{ $key }}][discount_price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-4">
                    <label class="form-label">@lang('Cân nặng(kg)')</label>
                    <x-input-number min="0" name="variant[{{ $key }}][weight]" :placeholder="trans('0')" />
                </div>
                <div class="col-12 col-md-8">
                    <label class="form-label">@lang('Kích thước(cm)')</label>
                    <div class="d-flex gap-1">
                        <div class="">
                            <x-input-number min="0" name="variant[{{ $key }}][length]" :placeholder="trans('Dài')" />
                        </div>
                        <div class="">
                            <x-input-number min="0" name="variant[{{ $key }}][width]" :placeholder="trans('Rộng')" />
                        </div>
                        <div class="">
                            <x-input-number min="0" name="variant[{{ $key }}][height]" :placeholder="trans('Cao')" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>