@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <x-core-form class="block-double-click" :action="route('cms.profile.update')" type="put" enctype="multipart/form-data" :validate="true">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">@lang('Họ và tên'):</label>
                                <x-core-input name="fullname" :value="$auth->fullname" :required="true" placeholder="{{ __('Họ và tên') }}"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">@lang('Số điện thoại'):</label>
                                <x-core-input-phone name="phone" :value="$auth->phone" :required="true" />
                            </div>
                        </div>
                        <div class="card-footer bg-transparent mt-auto">
                            <div class="btn-list justify-content-center">
                                <button type="submit" class="btn btn-primary">@lang('Cập nhật')</button>
                            </div>
                        </div>
                    </div>
                    </x-core-form>
                </div>
            </div>
        </div>
    </div>
@endsection
