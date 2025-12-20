<div class="input-group">
    <input type="text" {{ $attributes->class(['form-control'])->merge($isRequired()) }} name="{{ $name }}" value="{{ $value }}">
    <button class="btn add-file-ckfinder" type="button" data-input="input[name='{{ $name }}']">
        @lang('Chọn')
    </button>
</div>