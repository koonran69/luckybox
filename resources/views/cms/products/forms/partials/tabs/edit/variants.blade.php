<div class="list-group list-group-flush">
    @foreach ($product->variants as $variant)
        @include('cms.products.forms.partials.attributes.edit-variant-item')
    @endforeach
</div>