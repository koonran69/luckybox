<div class="d-flex gap-1">
    @if($data->code == 'LUCKY_MESSAGE')
        <span>{{ $data->remaining_quantity }}</span>
    @else
        <input type="number"
               class="form-control reward-input"
               value="{{ $data->remaining_quantity }}"
               data-field="remaining_quantity">

        <button class="btn btn-primary reward-update-btn"
                data-id="{{ $data->id }}"
                data-route="{{ route('cms.reward.inlineUpdate', $data->id) }}">
            Cập nhật
        </button>
    @endif
</div>
