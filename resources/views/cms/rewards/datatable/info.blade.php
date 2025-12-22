<div class="group-info text-center">
    @if($data->image_home)
        <img class="avatar avatar-xl" src="{{ asset($data->image_home) }}" alt=""/>
    @endif
    <div class="fs-3 fw-bold text-red">{{ $data->name }}</div>
    <div class="fs-3">Mô tả: {{ $data->description }}</div>
    <div class="fs-3">Giá trị hiển thị: {{ $data->display_value }}</div>
    <div class="fs-3">Ngày nhận: {{ $data->created_at }}</div>
</div>