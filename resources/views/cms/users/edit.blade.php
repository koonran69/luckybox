@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.user.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="id" :value="$data->id" />
                <div class="row justify-content-center">
                    @include('cms.users.forms.edit-left')
                    @include('cms.users.forms.edit-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection

@push('js')

@endpush