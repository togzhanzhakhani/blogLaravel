<?php

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;


class AdminController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->get();  
        $userRoles = auth()->user()->getRoleNames();
        $posts = Post::all();

        return Inertia::render('Dashboard', [
            'roles' => $userRoles, 
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'roles' => $user->roles->pluck('name'),
                ];
            }),
            'posts' => $posts
        ]);
    }

    public function edit($id)
    {
        $user = User::find($id);
        $roles = Role::all();
        return Inertia::render('Admin/Edit', [
            'user' => $user->load('roles'),
            'roles' => $roles,
            'csrf_token' => csrf_token() 
        ]);    
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->syncRoles($request->roles);
        return redirect()->route('dashboard');

    }
}
