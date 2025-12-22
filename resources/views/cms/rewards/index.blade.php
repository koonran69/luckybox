@extends('cms.layouts.datatable')

@section('datatable')
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách người tham gia')</h2>
        </div>
        <div class="card-body">
            <div class="table-responsive position-relative">
                @include('cms.common.datatables.toggle-column-datatable')
                {!! $dataTable->table(['class' => 'table table-bordered'], true) !!}
            </div>
        </div>
    </div>
@endsection
<script>
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.reward-update-btn');
        if (!btn) return;

        const wrapper = btn.closest('.d-flex');
        const input = wrapper.querySelector('.reward-input');

        btn.disabled = true;

        fetch(btn.dataset.route, {
            method: 'PUT',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: input.dataset.field,
                value: input.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if (!res.error) {
                    alert(res.msg);
                    return;
                }

                // success
                alert(res.msg);
            })
            .finally(() => {
                btn.disabled = false;
            });
    });
</script>

