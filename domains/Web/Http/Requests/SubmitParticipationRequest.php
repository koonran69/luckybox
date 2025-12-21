<?php

namespace Domains\Web\Http\Requests;

use Domains\Core\Enums\Gender;
use Domains\Core\Http\Requests\Request;
use Illuminate\Validation\Rule;

class SubmitParticipationRequest extends Request
{
    protected function methodPost()
    {
        return [
            'fullname' => ['required', 'string'],
            'phone' => ['required', 'regex:/((09|03|07|08|05)+([0-9]{8})\b)/','unique:users,phone'], //, 'unique:users,phone'
            'email' => ['required', 'email','unique:users,email'], //'unique:users,email'
            'gender' => ['nullable', Rule::enum(Gender::class)],
            'age' => ['nullable', 'string'],
            'address' => ['nullable', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'fullname.required' => trans('validation.participation.fullname.required'),
            'fullname.string'   => trans('validation.participation.fullname.string'),

            'phone.required' => trans('validation.participation.phone.required'),
            'phone.regex'    => trans('validation.participation.phone.regex'),
            'phone.unique'   => trans('validation.participation.phone.unique'),

            'email.required' => trans('validation.participation.email.required'),
            'email.email' => trans('validation.participation.email.email'),
            'email.unique'   => trans('validation.participation.email.unique'),

            'gender.enum' => trans('validation.participation.gender.enum'),

            'age.string' => trans('validation.participation.age.string'),

            'address.string' => trans('validation.participation.address.string'),
        ];
    }
}
