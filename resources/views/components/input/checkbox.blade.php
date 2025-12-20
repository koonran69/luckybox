<label class="form-check" style="--cat-depth: {{ $depth }}px">
    <input type="checkbox" {{ $attributes->class(['form-check-input']) }} @checked($isChecked()) value="{{ $value }}">
    <span class="form-check-label">{{ $label }}</span>
</label>