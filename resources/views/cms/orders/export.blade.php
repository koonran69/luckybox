<table>
    <thead>
        <tr>
            <th>Ngày đặt hàng</th>
            <th>Mã đơn hàng</th>
            <th>Tên</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Mã SP</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá bán</th>
            <th>Tổng tiền</th>
            <th>Phí giao hàng</th>
            <th>Trạng thái đơn hàng</th>
        </tr>
    </thead>
    <tbody>
    @foreach($orders as $order)
        @foreach($order->items as $item)
            <tr>
                <td>{{ format_date($order->created_at) }}</td>
                <td>{{ $order->code }}</td>
                <td>{{ $order->shipping_info->full_name }}</td>
                <td>{{ $order->shipping_info->phone }}</td>
                <td>{{ $order->shipping_info->address_detail }}</td>
                <td>
                    {{ $item->sku }}
                </td>
                <td>
                    {{ $item->name . ' - ' . $item->productVariant->attributeValues->pluck('name')->implode(', ') }}
                </td>
                <td>{{ $item->qty }}</td>
                <td>{{ $item->price }}</td>
                <td>{{ $item->subtotal }}</td>
                <td>{{ $order->shipping_fee }}</td>
                <td>{{ $order->status->description() }}</td>
            </tr>
        @endforeach
    @endforeach
    </tbody>
</table>