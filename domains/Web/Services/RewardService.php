<?php
namespace Domains\Web\Services;

use Illuminate\Support\Collection;

class RewardService
{
    public function randomRewardByWeight(Collection $rewards)
    {
        $totalWeight = $rewards->sum('weight');

        $rand = random_int(1, $totalWeight);
        $current = 0;
        dd($totalWeight,$rand);
        foreach ($rewards as $reward) {
            $current += $reward->weight;
            if ($rand <= $current) {
                return $reward;
            }
        }

        return null;
    }
}