@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.role.store')" type="post" :validate="true">
                <div class="row justify-content-center">
                    @include('cms.roles.forms.create-left')
                    @include('cms.roles.forms.create-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection

@push('libs-js')

@endpush
