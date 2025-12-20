@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.order.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$data->id" />
                <div class="row justify-content-center">
                    @include('cms.orders.forms.edit-left')
                    @include('cms.orders.forms.edit-right')
                </div>

            </x-core-form>
        </div>
    </div>
@endsection

@push('js')
    <script>
        $(document).ready(function() {
            
        });
    </script>
@endpush
