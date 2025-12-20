<div class="list-group-item variant-item" data-id="{{ $variant->id }}">
    <div class="row align-items-center">
        <div class="col-auto">
            <span class="avatar avatar-1" style="background-image: url({{ asset($variant->thumbnail) }})"> </span>
        </div>
        <div class="col">
            <a href="#" class="open-modal-form" data-route="{{ route('cms.product_variant.edit', $variant->id)}}">{{ $variant->title }}</a>
            <br>
            <small>@lang('Khối lượng: :gram grams', ['gram' => $variant->grams])</small>
        </div>
        <div class="col-auto">
            <div class="">
                <span>{{ utilities()->formatPrice($variant->price) }}</span>
                @if ($variant->compare_at_price)
                    <span class="mx-1">-</span>
                    <del>{{ utilities()->formatPrice($variant->compare_at_price) }}</del>
                @endif
            </div>
            <div class="">
                <small>@lang(':count khả dụng', ['count' => $variant->qty])</small>
            </div>
        </div>
    </div>
</div>