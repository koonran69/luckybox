
<div class="d-flex align-items-center gap-2">
    <img class="rounded" style="width: 150px" src="{{ asset($data->feature_image) }}" />
    <span>{{ str_repeat('-', $data->depth) . ' ' . $data->name }}</span>
</div>