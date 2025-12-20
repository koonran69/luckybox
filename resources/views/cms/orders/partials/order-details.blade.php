@props(['data'])

<div class="card">
    <div class="card-header justify-content-between">
        @lang('Chi tiết đơn hàng')
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-vcenter">
                <thead>
                    <tr>
                        <th></th>
                        <th>@lang('Tên sản phẩm')</th>
                        <th>@lang('Số lượng')</th>
                        <th>@lang('Giá')</th>
                        <th>@lang('Thành tiền')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data->items as $item)
                        <tr>
                            <td style="width: 80px;">
                                <img src="{{ asset($item->variant['thumbnail']) }}" alt="">
                            </td>
                            <td style="width: 45%;">
                                {{ $item->variant['product_title'] }}
                                <br>
                                <small class="text-secondary">{{ $item->variant['title'] }}</small>
                            </td>
                            <td>{{ $item->qty }}</td>
                            <td>{{ utilities()->formatPrice($item->price) }}</td>
                            <td>{{ utilities()->formatPrice($item->price * $item->qty ) }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <table class="table table-transparent table-responsive mb-0 table-vcenter">
                <thead class="d-none">
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fw-bold text-end text-uppercase" colspan="3">
                            @lang('Tạm tính')</td>
                        <td class="text-end fs-1 sub-total" colspan="2">
                            {{ utilities()->formatPrice($data->subtotal) }}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold text-end text-uppercase" colspan="3">
                            @lang('Giảm giá')</td>
                        <td class="text-end fs-1 sub-total" colspan="2">
                            -{{ utilities()->formatPrice($data->discount_total) }}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold text-end text-uppercase" colspan="3">
                            @lang('Phí giao hàng')</td>
                        <td class="text-end fs-1 sub-total" colspan="2">
                            {{ utilities()->formatPrice($data->shipping_fee) }}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold text-end text-uppercase" colspan="3">
                            @lang('Phương thức thanh toán')</td>
                        <td class="text-end fs-1 sub-total" colspan="2">
                            {{ $data->payment_method->description() }}

                            @if($data->isPaymentVNPay())
                                @if ($data->paid_at)
                                    <span class="badge bg-success-lt">@lang('Đã thanh toán')</span>
                                @endif
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td class="fw-bold text-end text-uppercase" colspan="3">
                            @lang('Tổng cộng')</td>
                        <td class="text-end fs-1 sub-total" colspan="2">
                            {{ utilities()->formatPrice($data->total) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 