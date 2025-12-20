@extends('cms.layouts.master')
@push('libs-css')
    <link rel="stylesheet" href="{{ asset('/libs/select2/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/libs/select2/css/select2-bootstrap-5-theme.min.css') }}">
@endpush
@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.product.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="product[id]" :value="$product->id" />
                <div class="row justify-content-center">
                    @include('cms.products.forms.edit-left')
                    @include('cms.products.forms.edit-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection

@push('libs-js')
    @include('ckfinder::setup')
    <script src="{{ asset('/libs/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('/libs/ckeditor/adapters/jquery.js') }}"></script>

    <script src="{{ asset('/libs/select2/js/select2.min.js') }}"></script>
@endpush

@push('js')
<script>
    $(document).on('submit', '#editPV', function(e) {
        e.preventDefault();
        AjaxLibrary.post(
            $(this).attr('action'), 
            $(this).serialize(),
            function(res) {
                $('.variant-item[data-id="'+res.data.id+'"]').replaceWith(res.data.html);
                ModalLibrary.close();
            }
        )
    })
</script>
@endpush