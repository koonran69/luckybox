<?php

namespace Domains\Admin\Http\Controllers\Cms\Permission;

use Domains\Admin\DataTables\PermissionDataTable;
use Domains\Admin\Http\Requests\Permission\PermissionRequest;
use Domains\Admin\Repositories\Permission\PermissionRepositoryInterface;
use Domains\Admin\Services\Route\RouteService;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Responses\Response;

class PermissionController extends Controller
{
    public function __construct(
        public PermissionRepositoryInterface $repository,
        public RouteService $routeService
    )
    {

    }

    public function index(PermissionDataTable $datatable)
    {
        return $datatable->render('cms.permissions.index', [
            'breadcrumb' => $this->breadcrumb()->addByUrl(trans('Quyền'))
        ]);
    }

    public function create()
    {
        $routeNames = $this->routeService->getRoutesByName(
            config('cms.roles_permissions.route_name_prefix'), 
            config('cms.roles_permissions.whitelist_routes_name')
        );

        if(request()->ajax())
        {
            return view('cms.permissions.modals.create')->with('route_names', $routeNames);
        }

        return view('cms.permissions.create')

        ->with('breadcrumb', $this->breadcrumb()->addByUrl(trans('Quyền'), route('cms.permission.index'))->addByUrl(trans('Thêm')))
        
        ->with('route_names', $routeNames);
    }

    public function store(PermissionRequest $request)
    {
        $this->repository->create($request->validated());
        
        return utilities()->responseAjax();
    }

    public function edit($id)
    {
        $routeNames = $this->routeService->getRoutesByName(
            config('cms.roles_permissions.route_name_prefix'), 
            config('cms.roles_permissions.whitelist_routes_name')
        );

        $permission = $this->repository->findOrFail($id);

        return view('cms.permissions.modals.edit')->with('permission', $permission)->with('route_names', $routeNames);
    }

    public function update(PermissionRequest $request)
    {
        $this->repository->update($request->id, $request->validated());
        
        return Response::responseAjax();
    }

    public function delete($id)
    {
        $this->repository->delete($id);

        if(request()->ajax())
        {
            return Response::responseAjax();
        }
    
        return Response::toRoute('cms.permission.index');
    }
}