
<div class="d-flex align-items-center gap-2">
    <img class="rounded" style="width: 150px" src="{{ asset($data->thumbnail) }}" />
    <span>{{ $data->title }}</span>
    @if ($data->is_featured)
        <span class="badge bg-orange text-orange-fg">@lang('Nổi bật')</span>
    @endif
</div>