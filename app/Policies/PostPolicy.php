<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Post;

use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        // Разрешаем просмотр списка постов всем пользователям
        return true;
    }

    public function view(User $user, Post $post)
    {
        // Разрешаем просмотр конкретного поста всем пользователям
        return true;
    }

    public function create(User $user)
    {
        // Разрешаем создание нового поста только для администраторов
        return $user->role === 'admin';
    }

    public function update(User $user, Post $post)
    {
        // Разрешаем редактирование поста только для администраторов
        return $user->role === 'admin';
    }

    public function delete(User $user, Post $post)
    {
        // Разрешаем удаление поста только для администраторов
        return $user->role === 'admin';
    }
}
