@extends('cms.layouts.guest.master')

@section('content')
    <div class="page page-center">
        <div class="container container-tight py-4">
            <div class="text-center mb-4">
                <a href="#" class="navbar-brand navbar-brand-autodark">
                    <img src="{{ asset(utilities()->getSetting('site_logo')) }}" width="110" height="32" alt="K-Tech Admin"
                        class="navbar-brand-image">
                </a>
            </div>
            <div class="card card-md">
                <div class="card-body">
                    <h2 class="h2 text-center mb-4">@lang('Đăng nhập')</h2>
                    <x-core-form class="block-double-click" :action="route('cms.login.handle')" type="post" :validate="true">
                        <div class="mb-3">
                            <label class="form-label">@lang('Email'):</label>
                            <x-core-input-email name="email" :required="true" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">@lang('Mật khẩu'):</label>
                            <x-core-input-password name="password" :required="true" />
                        </div>
                        <div class="form-footer">
                            <button type="submit" class="btn btn-primary w-100">@lang('Đăng nhập')</button>
                        </div>
                    </x-core-form>
                </div>
            </div>
        </div>
    </div>
@endsection
