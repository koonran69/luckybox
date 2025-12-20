<p class="mt-2">{!! $data->content !!}</p>
@if ($data->images)
    <div class="d-flex gap-1">
        @foreach ($data->images->toArray() as $image)
            <img src="{{ asset($image) }}" alt="" width="100" class="img-thumbnail">
        @endforeach
    </div>    
@endif
