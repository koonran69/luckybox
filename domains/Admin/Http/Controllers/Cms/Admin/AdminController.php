<?php

namespace Domains\Admin\Http\Controllers\Cms\Admin;

use Domains\Admin\DataTables\AdminDataTable;
use Domains\Admin\Http\Requests\Admin\AdminRequest;
use Domains\Admin\Repositories\Admin\AdminRepositoryInterface;
use Domains\Admin\Repositories\Permission\PermissionRepositoryInterface;
use Domains\Admin\Repositories\Role\RoleRepositoryInterface;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Facades\Utilities;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class AdminController extends Controller
{
    public function __construct(
        public AdminRepositoryInterface $repository,
        public RoleRepositoryInterface $repoRole,
        public PermissionRepositoryInterface $repoPermission
    )
    {
    }

    public function index(AdminDataTable $datatable): View|JsonResponse
    {
        return $datatable->render('cms.admins.index', [
            'breadcrumb' => $this->breadcrumb()->addByUrl(trans('Admin'))
        ]);
    }

    public function create(): View
    {
        $roles = $this->repoRole->getAll();

        $permissions = $this->repoPermission->getAll();

        return view('cms.admins.create')
        ->with('breadcrumb', $this->breadcrumb()->addByUrl(trans('Admin'), route('cms.admin.index'))->add(trans('Thêm')))
        ->with('roles', $roles)
        ->with('permissions', $permissions);
    }

    public function store(AdminRequest $request)
    {
        try {

            $data = $request->validated();

            $admin = $this->repository->createHasRoleAndPermission($data['admin'], $data['roles'] ?? [], $data['permissions'] ?? []);

            if($admin)
            {
                return $request->input('submitter') == 'save' 
                    ? to_route('cms.admin.edit', $admin->id)->with('success', __('notifySuccess')) 
                    : to_route('cms.admin.index')->with('success', __('notifySuccess'));
            }

            return Utilities::responseBack();

        } catch (\Throwable $th) {

            // throw $th;
            return Utilities::responseBack(error: true, msg: $th->getMessage(), withInput: true);
        }
    }

    public function edit($id): View
    {
        $admin = $this->repository->findOrFail($id, ['roles', 'permissions']);

        $roles = $this->repoRole->getAll();

        $permissions = $this->repoPermission->getAll();
        
        return view('cms.admins.edit')
        ->with('breadcrumb', $this->breadcrumb()->addByUrl(trans('Admin'), route('cms.admin.index'))->add(trans('Edit')))
        ->with('admin', $admin)
        ->with('roles', $roles)
        ->with('permissions', $permissions)
        ->with('admin_has_roles', $admin->roles->pluck('id')->toArray())
        ->with('admin_has_permissions', $admin->permissions->pluck('id')->toArray());
    }

    public function update(AdminRequest $request)
    {
        try {

            $data = $request->validated();

            $admin = $this->repository->updateHasRoleAndPermission($request->id, $data['admin'], $data['roles'] ?? [], $data['permissions'] ?? []);

            if($admin)
            {
                return $request->input('submitter') == 'save' 
                    ? Utilities::responseBack()
                    : Utilities::toRoute('cms.admin.index');
            }

            return Utilities::responseBack();

        } catch (\Throwable $th) {

            // throw $th;

            return Utilities::responseBack(error: true, msg: $th->getMessage(), withInput: true);
        }
    }

    public function delete($id)
    {
        try {
            
            $this->repository->delete($id);

            if(request()->ajax())
            {
                return Utilities::responseAjax();
            }
            
            return Utilities::toRoute('cms.admin.index');

        } catch (\Throwable $th) {

            //throw $th;

            if(request()->ajax())
            {
                return Utilities::responseAjax(error: true, msg: $th->getMessage());
            }

            return Utilities::responseBack(error: true, msg: $th->getMessage());
        }
    }
}