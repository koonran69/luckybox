@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.role.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$role->id" />
                <div class="row justify-content-center">
                    @include('cms.roles.forms.edit-left')
                    @include('cms.roles.forms.edit-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection
