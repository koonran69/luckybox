<div class="d-flex gap-1">
    <input type="number"
           step="0.01"
           class="form-control reward-input"
           value="{{ $data->weight }}"
           data-field="weight">

    <button class="btn btn-primary reward-update-btn"
            data-id="{{ $data->id }}"
            data-route="{{ route('cms.reward.inlineUpdate', $data->id) }}">
        Cập nhật
    </button>
</div>
