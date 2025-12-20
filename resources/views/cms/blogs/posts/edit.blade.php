@extends('cms.layouts.master')
@push('libs-css')
    <link rel="stylesheet" href="{{ asset('/libs/select2/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/libs/select2/css/select2-bootstrap-5-theme.min.css') }}">
@endpush
@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.post.update')" type="put" :validate="true">
                <x-core-input type="hidden" name="post[id]" :value="$post->id" />
                <div class="row justify-content-center">
                    @include('cms.blogs.posts.forms.edit-left')
                    @include('cms.blogs.posts.forms.edit-right')
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

