<?php

namespace Domains\Core\Traits;
use Illuminate\Support\Str;

trait Helper
{
    public static function stringToInteger(string  $number)
    {
        return (int) str_replace([',', '.'], '', $number);
    }
    
    public static function uniqidReal($lenght = 13)
    {
        if (function_exists("random_bytes"))
        {
            $bytes = random_bytes(ceil($lenght / 2));
        } elseif (function_exists("openssl_random_pseudo_bytes")) {

            $bytes = openssl_random_pseudo_bytes(ceil($lenght / 2));
        } else {

            throw new \Exception("no cryptographically secure random function available");
        }

        return Str::upper(substr(bin2hex($bytes), 0, $lenght));
    }

    public static function formatPrice($price, $position_current = '', $currency = '') {
        
        if($position_current == '')
        {
            $position_current = 'right';
        }

        $current = $currency ?: 'đ';

        return $position_current == 'left' ? $current.number_format($price) : number_format($price).$current;
    }

    public static function formatDate($date, $format = null)
    {
        if($date)
        {
            $format = $format ?: 'd-m-Y';
            return date($format, strtotime($date));
        }

        return null;
    }

    public static function formatDatetime($datetime, $format = null)
    {
        if($datetime)
        {
            $format = $format ?: 'd-m-Y H:i';
            return date($format, strtotime($datetime));
        }
        return null;
    }

    public static function calcStartPercent($number, $current)
    {
        $fill = 0;

        if ($number >= $current) {
            $fill = 100;
        } elseif ($number + 1 > $current) {

            $fill = ($number - ($current - 1)) * 100;
        }

        return $fill;
    }
}