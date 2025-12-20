@extends('cms.layouts.master')

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <x-core-form class="block-double-click" :action="route('cms.admin.store')" type="post" :validate="true">
                <div class="row justify-content-center">
                    @include('cms.admins.forms.create-left')
                    @include('cms.admins.forms.create-right')
                </div>
                @include('cms.common.forms.actions-fixed')
            </x-core-form>
        </div>
    </div>
@endsection

@push('js')
<script>
$(document).ready(function(){
    $('input[name="admin[is_superadmin]"]').change(function(e) {
        if(this.checked) {
           $("#rolePermission").css('display', 'none');
           $('input[name="roles[]"]').prop('checked', false);
           $('input[name="permissions[]"]').prop('checked', false);
        }else{
            $("#rolePermission").css('display', 'block');
        }
    })
})
</script>
@endpush
