<div class="accordion-item">
    <div class="accordion-header">
        <div class="d-flex gap-1 w-100 ps-2">
            <div class="col-6 col-md-3">
                {{ $p_attr->name }}
            </div>
        </div>
        <div class="col">
            <button type="button" class="btn btn-sm btn-outline-danger remove-attr" data-attr_id="{{ $p_attr->id }}">
                @lang('Xoá')
            </button>
        </div>
        <div class="col-auto">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accorVariant{{ $p_attr->id }}" aria-expanded="false">
                
                <div class="accordion-button-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-1">
                        <path d="M6 9l6 6l6 -6"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <div id="accorVariant{{ $p_attr->id }}" class="accordion-collapse collapse">
        <div class="accordion-body">
            <x-select class="select2-bs5 sel-attr" name="attribute[{{ $p_attr->id }}][]" :multiple="true">
                @foreach ($p_attr->values as $item)
                    <x-select-option :selected="$item->isSelected ? $item->id : false" :value="$item->id" :title="$item->name" />
                @endforeach
            </x-select>
        </div>
    </div>
</div>