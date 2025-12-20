<div class="d-flex align-items-center gap-2">
    <img class="rounded" style="width: 150px" src="{{ asset($data->thumbnail) }}" />
    <span>{{ str_repeat('-', $data->depth) . ' ' . $data->title }}</span>
</div>