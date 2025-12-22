<?php

namespace Domains\Reward\DataTables;

use Domains\Core\DataTables\DataTables;
use Domains\User\Models\User;
use Domains\Web\Enums\RewardHistoryStatus;
use Domains\Web\Models\Reward;

class RewardDataTable extends DataTables
{

    public string $nameTable = 'rewards';

    public function __construct(
        public Reward $model
    ){
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['name', 'created_at'];
    }

    protected function setColumnSearchDate(): void
    {
        $this->columnSearchDate = ['created_at'];
    }

    public function query()
    {
        $data = $this->model->makeQuery();
        return $data;
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'info' => fn($row) => view('cms.rewards.datatable.info')->with('data', $row),
            'total_quantity' => fn($row) => view('cms.rewards.datatable.total_quantity')->with('data', $row),
            'remaining_quantity' => fn($row) => view('cms.rewards.datatable.remaining_quantity')->with('data', $row),
            'weight' => fn($row) => view('cms.rewards.datatable.weight')->with('data', $row),
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['info','total_quantity','remaining_quantity','weight'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'info' => [
                'title' => 'Ảnh phần thưởng',
                'orderable' => false,
            ],
            'total_quantity' => [
                'title' => 'Tổng số lượng phần thưởng',
                'orderable' => false,
            ],
            'remaining_quantity' => [
                'title' => 'Số phần thưởng còn lại',
                'orderable' => false,
            ],
            'weight' => [
                'title' => 'Trọng lượng/xác suất',
                'orderable' => false,
            ],
        ];
    }
}
