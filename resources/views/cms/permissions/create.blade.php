@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form :action="route('cms.permission.store')" type="post" :validate="true">
                <div class="row justify-content-center">
                    @include('cms.permissions.forms.create-left')
                    @include('cms.permissions.forms.create-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection

@push('libs-js')

@endpush
