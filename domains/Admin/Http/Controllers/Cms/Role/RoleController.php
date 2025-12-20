<?php

namespace Domains\Admin\Http\Controllers\Cms\Role;

use Domains\Admin\DataTables\RoleDataTable;
use Domains\Admin\Http\Requests\Role\RoleRequest;
use Domains\Admin\Repositories\Permission\PermissionRepositoryInterface;
use Domains\Admin\Repositories\Role\RoleRepositoryInterface;
use Domains\Admin\Services\Route\RouteService;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Responses\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;

class RoleController extends Controller
{
    public function __construct(
        public RoleRepositoryInterface $repository,
        public PermissionRepositoryInterface $repoPermission,
        public RouteService $routeService
    )
    {

    }

    public function index(RoleDataTable $datatable): View|JsonResponse
    {
        return $datatable->render('cms.roles.index', [
            'breadcrumb' => $this->breadcrumb()->addByUrl(trans('Vai trò'))
        ]);
    }

    public function create()
    {
        $permissions = $this->repoPermission->getAll();

        return view('cms.roles.create')
        ->with('breadcrumb', $this->breadcrumb()->addByUrl(trans('Vai trò'), route('cms.role.index'))->addByUrl(trans('Thêm')))
        ->with('permissions', $permissions);
    }

    public function store(RoleRequest $request)
    {
        try {

            $data = $request->validated();

            $role = $this->repository->createHasPermissions($data['role'], $data['permissions']);
        
            if($role)
            {
                return $request->input('submitter') == 'save' 
                    ? to_route('cms.role.edit', $role->id)->with('success', __('notifySuccess')) 
                    : to_route('cms.role.index')->with('success', __('notifySuccess'));

                return $request->input('submitter') == 'save' 
                    ? Response::toRoute('cms.role.edit', $role->id)
                    : Response::toRoute('cms.role.index');
            }

            return Response::responseBack(error: true);

        } catch (\Throwable $th) {

            // throw $th;
            return Response::responseBack(error: true, msg: $th->getMessage(), withInput: true);
        }
    }

    public function edit($id): View
    {
        $role = $this->repository->findOrFail($id, ['permissions']);

        $permissions = $this->repoPermission->getAll();
        
        return view('cms.roles.edit')

        ->with('breadcrumb', $this->breadcrumb()->addByUrl(trans('Vai trò'), route('cms.role.index'))->addByUrl(trans('Edit')))

        ->with('role', $role)

        ->with('permissions', $permissions)
        
        ->with('role_has_permissions', $role->permissions->pluck('id')->toArray());
    }

    public function update(RoleRequest $request): RedirectResponse
    {
        try {

            $data = $request->validated();

            $role = $this->repository->updateHasPermissions($request->id, $data['role'], $data['permissions']);

            if($role)
            {
                return $request->input('submitter') == 'save' 
                    ? Response::responseBack()
                    : Response::toRoute('cms.role.index');
            }

            return Response::responseBack(error: true);

        } catch (\Throwable $th) {

            // throw $th;
            return Response::responseBack(error: true, msg: $th->getMessage(), withInput: true);
        }
    }

    public function delete($id)
    {
        try {
            
            $this->repository->delete($id);
        
            if(request()->ajax())
            {
                return Response::responseAjax();
            }
            
            return to_route('cms.role.index')->with('success', __('notifySuccess'));
        } catch (\Throwable $th) {

            if(request()->ajax())
            {
                return Response::responseAjax(error: true, msg: $th->getMessage());
            }

            return Response::responseBack(error: true, msg: $th->getMessage());
        }
    }
}