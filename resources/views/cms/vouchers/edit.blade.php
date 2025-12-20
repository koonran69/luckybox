@extends('cms.layouts.master')
@push('libs-css')
    <link rel="stylesheet" href="{{ asset('/libs/select2/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/libs/select2/css/select2-bootstrap-5-theme.min.css') }}">
@endpush
@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.voucher.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$data->id" />
                <div class="row justify-content-center">
                    @include('cms.vouchers.forms.edit-left')
                    @include('cms.vouchers.forms.edit-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection

@push('js')
    <script>
        $(document).ready(function() {
            $('input[name="is_user"]').change(function(e) {
                if (this.checked) {
                    $("#selectUser").css('display', 'block');
                } else {
                    $("#selectUser").css('display', 'none');
                }
            })

            $('select[name="type"]').change(function(e) {
                if($(this).val() == '10') {
                $("#maxDiscountValue").css('display', 'block');
                }else{
                    $("#maxDiscountValue").css('display', 'none');
                }
            })
        })
    </script>
@endpush

@push('libs-js')
    @include('ckfinder::setup')
    <script src="{{ asset('/libs/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('/libs/ckeditor/adapters/jquery.js') }}"></script>

    <script src="{{ asset('/libs/select2/js/select2.min.js') }}"></script>
@endpush
