@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <x-core-form class="block-double-click" :action="route('cms.password.update')" type="put" enctype="multipart/form-data" :validate="true">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">@lang('Mật khẩu cũ'):</label>
                                <x-core-input-password name="old_password" :required="true"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">@lang('Mật khẩu mới'):</label>
                                <x-core-input-password name="password" :required="true"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">@lang('Nhập lại mật khẩu'):</label>
                                <x-core-input-password name="password_confirmation" :required="true" data-parsley-equalto="input[name='password']" data-parsley-equalto-message="{{ __('Mật khẩu không khớp') }}"/>
                            </div>
                            <div class="btn-list justify-content-center">
                                <button type="submit" class="btn btn-primary">@lang('Xác nhận')</button>
                            </div>
                        </div>
                    </div>
                    </x-core-form>
                </div>
            </div>
        </div>
    </div>
@endsection
