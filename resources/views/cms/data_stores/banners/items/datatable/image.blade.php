@if ($data->isImage())
    <img src="{{ asset($data->image_desktop) }}" width="200" alt="" />
@else
    <a href="{{ asset($data->video) }}" target="_blank">
        <img class="avatar avatar-xl" src="{{ asset('assets/images/play_video.png') }}" alt="" />
    </a>
@endif