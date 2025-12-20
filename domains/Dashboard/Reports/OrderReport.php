<?php

namespace Domains\Dashboard\Reports;

use Carbon\CarbonPeriod;
use Domains\Core\Supports\Helper;
use Domains\Order\Repositories\Order\OrderRepositoryInterface;
use Illuminate\Support\Carbon;

class OrderReport
{
    public $orders;

    public function __construct(
        public OrderRepositoryInterface $repo
    )
    {
        
    }

    public function getOrders(Carbon $start, Carbon $end)
    {
        $this->orders = $this->repo->getBy(
            filter: [
                ['created_at', 'BETWEEN',  [$start, $end]],
            ]
        );
        
        return $this;
    }

    public function countChart(Carbon $start, Carbon $end): array
    {
        if(!$this->orders)
        {
            $this->getOrders($start, $end);
        }

        $orders = $this->orders->map(function($item) {
            return [
                'id' => $item->id,
                'date' => Helper::formatDate($item->created_at),
            ];
        })
        ->groupBy('date')
        ->toArray();
        
        $period = CarbonPeriod::create($start, $end);

        $chart = [];

        foreach($period as $date)
        {
            array_push($chart, [
                'date' => $date->format('d-m-Y'),
                'total' => isset($orders[$date->format('d-m-Y')]) ? count($orders[$date->format('d-m-Y')]) : 0
            ]);
        }

        return $chart;
    }

    public function revenueChart(Carbon $start, Carbon $end): array
    {
        if(!$this->orders)
        {
            $this->getOrders($start, $end);
        }

        $orders = $this->orders->map(function($item) {
            return [
                'total' => $item->total,
                'date' => Helper::formatDate($item->created_at),
            ];
        })
        ->groupBy('date')
        ->toArray();
        
        $period = CarbonPeriod::create($start, $end);

        $chart = [];

        foreach($period as $date)
        {
            array_push($chart, [
                'date' => $date->format('d-m-Y'),
                'total' => isset($orders[$date->format('d-m-Y')]) ? array_sum(array_column($orders[$date->format('d-m-Y')], 'total')) : 0
            ]);
        }

        return $chart;
    }
}