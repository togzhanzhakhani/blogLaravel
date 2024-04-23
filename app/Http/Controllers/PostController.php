<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;


class PostController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        Post::create($request->all());

        return redirect()->route('dashboard')
                 ->with('success', 'Post created successfully.');

    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return Inertia::render('Posts/Edit', ['post' => $post]);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $post = Post::findOrFail($id);
        $post->update($request->all());

        return redirect()->route('dashboard')
                 ->with('success', 'Post updated successfully.');

    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->route('dashboard')
                 ->with('success', 'Post deleted successfully.');
    }
}
