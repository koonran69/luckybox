<div class="mb-2 d-flex gap-1">
    @foreach ($data->items as $item)
        @if ($item->isImage())
            <img class="avatar avatar-xl" src="{{ asset($item->image_desktop) }}" alt="" />
        @else
            <a href="{{ asset($item->video) }}" target="_blank">
                <img class="avatar avatar-xl" src="{{ asset('assets/images/play_video.png') }}" alt="" />
            </a>
        @endif
    @endforeach
</div>
<a href="{{ route('cms.banner.item.index', $data->position) }}">@lang('Cấu hình Items')</a>