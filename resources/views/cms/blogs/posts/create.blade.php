@extends('cms.layouts.master')
@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.post.store')" type="post" :validate="true">
                <div class="row justify-content-center">
                    @include('cms.blogs.posts.forms.create-left')
                    @include('cms.blogs.posts.forms.create-right')
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

@endpush

