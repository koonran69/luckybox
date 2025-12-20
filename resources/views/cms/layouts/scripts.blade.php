<script src="{{ asset('/templates/simple/js/tabler.min.js') }}" defer></script>
<script src="{{ asset('/libs/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('/libs/jquery-toast-plugin/jquery.toast.min.js') }}"></script>
<script src="{{ asset('/libs/parsley/parsley.min.js') }}"></script>
<script src="{{ asset('libs/select2/js/select2.min.js') }}"></script>
@stack('libs-js')

<script type="module" src="{{ asset('/core/assets/js/i18n.js') }}"></script>
<script src="{{ asset('/core/assets/js/init.js') }}"></script>
<script src="{{ asset('/core/assets/js/select2.js') }}"></script>
<script type="text/javascript" src="{{ asset('/cms/assets/js/ck-finder-editor.js') }}"></script>
<script type="text/javascript" src="{{ asset('/cms/assets/js/main.js') }}"></script>
<script src="{{ asset('/core/assets/js/lib-ajax.js') }}"></script>
<script src="{{ asset('/core/assets/js/modal.js') }}"></script>
<script src="{{ asset('/core/assets/js/modal-form.js') }}"></script>

@stack('js')