@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form :action="route('cms.permission.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$permission->id" />
                <div class="row justify-content-center">
                    @include('cms.permissions.forms.edit-left')
                    @include('cms.permissions.forms.edit-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection
