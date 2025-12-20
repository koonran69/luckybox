<div class="d-flex align-items-center gap-2">
    <img class="rounded" style="width: 150px" src="{{ asset($data->thumbnail) }}" />
    <div class="">
        <div class="">
            <span>{{$data->title }}</span>
            @if ($data->is_bestseller)
                <span class="badge bg-orange text-orange-fg">@lang('Nổi bật')</span>
            @endif
        </div>
        <span class="text-secondary mt-2">@lang('Có :count biến thể', ['count' => $data->variants_count])</span>
    </div>
</div>