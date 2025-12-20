<?php
namespace Domains\Web\Services;

use Illuminate\Support\Collection;

class RewardService
{
    public function randomRewardByWeight(Collection $rewards)
    {
        $totalWeight = $rewards->sum('weight'); //Tính tổng trọng số

        $rand = random_int(1, $totalWeight); //random một số nguyên từ 1 đến tổng trọng số
        $current = 0;

        foreach ($rewards as $reward) {
            $current += $reward->weight; //cộng dồn weight từng phần thưởng lấy ra được
            if ($rand <= $current) { //Lấy phần thưởng nếu số random rơi vào khoảng current sum đổ lại
                //Tất nhiên phần thưởng có tỉ trọng weight số càng nhỏ thì rand càng khó ra (1-266)
                return $reward;
            }
        }

        return null;
    }
}