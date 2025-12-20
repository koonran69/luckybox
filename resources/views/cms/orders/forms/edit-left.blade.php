<div class="col-12 col-md-9">
    <div class="row">
        <div class="col-12 col-md-6 mb-3">
            @include('cms.orders.partials.basic-info', ['data' => $data])
        </div>
        <div class="col-12 col-md-6 mb-3">
            @include('cms.orders.partials.shipping-info')
        </div>

        <div class="col-12 mt-3">
            @include('cms.orders.partials.order-details', ['data' => $data])
        </div>
    </div>
</div>
