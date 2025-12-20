<?php

namespace Domains\User\Http\Controllers\Cms;

use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Enums\Gender;
use Domains\User\DataTables\UserDataTable;
use Domains\User\Http\Requests\Cms\UserRequest;
use Domains\User\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(
        public User $model,
    ) {}

    public function index(UserDataTable $datatable)
    {
        return $datatable->render('cms.users.index', [
            'breadcrumb' => $this->breadcrumb()->addByRouteName(trans('Người dùng'))
        ]);
    }

    public function create()
    {
        return view('cms.users.create')

        ->with('gender', Gender::asSelectArray())

        ->with('breadcrumb', $this->breadcrumb()->addByRouteName(trans('Người dùng'), 'cms.user.index')->add(trans('Thêm')));
    }

    public function store(UserRequest $request)
    {
        $data = $request->validated();
        
        if(!empty($data['province_code']) && !empty($data['district_code']) && !empty($data['ward_code']))
        {
            $data['address_full'] = get_text_address($data['address'], $data['province_code'], $data['district_code'], $data['ward_code']);
        }

        $user = $this->model->create($data);

        return utilities()->toRoute('cms.user.edit', $user->id);
    }

    public function edit($id)
    {
        return view('cms.users.edit')

        ->with('gender', Gender::asSelectArray())

        ->with('breadcrumb', $this->breadcrumb()->addByRouteName(trans('Người dùng'), 'cms.user.index')->add(trans('Sửa')))

        ->with('data', $this->model->findOrFail($id)->load(['province', 'district', 'ward']));
    }

    public function update(UserRequest $request)
    {
        $data = $request->validated();

        if(!empty($data['province_code']) && !empty($data['district_code']) && !empty($data['ward_code']))
        {
            $data['address_full'] = get_text_address($data['address'], $data['province_code'], $data['district_code'], $data['ward_code']);
        }

        if($request->input('password', null) == null)
        {
            unset($data['password']);
        }

        $this->model->findOrFail($data['id'])->update($data);

        return utilities()->responseBack();
    }

    public function delete($id)
    {
        try {

            $this->model->findOrFail($id)->delete();

            if (request()->ajax())
            {
                return utilities()->responseAjax();
            }

            return utilities()->toRoute('cms.user.index');

        } catch (\Throwable $th) {

            throw $th;
        }
    }

    public function searchSelect(Request $res)
    {
        $keyword = $res->input('term', '');

        $response = $this->model->whereAny(['fullname', 'email', 'phone'], 'like', "%$keyword%")
        ->get()
        ->map(fn($item) => ['id' => $item->id, 'text' => $item->fullname]);

        return [
            'results' => $response
        ];
    }
}
