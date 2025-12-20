<?php

namespace Domains\Dashboard\Http\Controllers\Cms;

use Domains\Core\Http\Controllers\BaseController;
use Domains\Dashboard\Reports\OrderReport;
use Domains\Order\Repositories\Order\OrderRepositoryInterface;
use Domains\Product\Repositories\Product\ProductRepositoryInterface;
use Domains\User\Models\User;
use Illuminate\Support\Facades\Http;

class DashboardController extends BaseController
{
    public function __construct(
        public ProductRepositoryInterface $repoProduct,
        public OrderRepositoryInterface $repoOrder,
        public User $modelUser,
        public OrderReport $orderReport
    )
    {
        
    }
    public function index()
    {      
        $orderReport = $this->orderReport->getOrders(now()->subDays(7)->startOfDay(), now()->endOfDay());
        
        return view('cms.dashboard.index')

        ->with('total_user', $this->modelUser->count())

        ->with('order_chart', json_encode($orderReport->revenueChart(now()->subDays(7), now())))

        ->with('order_count_chart', json_encode($orderReport->countChart(now()->subDays(7), now())))
        
        ->with('total_product', $this->repoProduct->countAll())

        ->with('total_order', $this->repoOrder->countAll());
    }
}