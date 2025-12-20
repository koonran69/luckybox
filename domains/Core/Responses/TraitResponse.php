<?php

namespace Domains\Core\Responses;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

trait TraitResponse
{
    public static function responseAjax(bool $error = false, string|null $msg = null, $data = null, $statusCode = 200): JsonResponse
    {
        return response()->ajax($error, $msg, $data, $statusCode);
    }

    public static function responseBack(bool $error = false, bool $show_msg = true, string|null $msg = null, bool $withInput = false): RedirectResponse
    {
        $res = back();

        if ($withInput) {
            $res = $res->withInput();
        }
        if($show_msg == true)
        {
            return $res->with(...array_values(self::handleType($error, $msg)));
        }

        return $res;
    }

    public static function toRoute(string $name, array|int|string|null $params = null, bool $error = false, bool $show_msg = true, string|null $msg = null): RedirectResponse
    {
        if($show_msg == true)
        {
            return to_route($name, $params)->with(...array_values(self::handleType($error, $msg)));
        }

        return to_route($name, $params);
    }

    public static function handleType(bool  $error = false, string|null $msg = null): array
    {
        return [
            'type' => $error ? 'error' : 'success',
            'msg' => $msg ?: ($error ? trans('notifyFail') : trans('notifySuccess'))
        ];
    }
}
