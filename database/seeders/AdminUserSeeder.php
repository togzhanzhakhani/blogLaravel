<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::firstOrCreate(['name' => 'admin']);

        $admin = User::firstOrCreate(
            [
                'email' => 'admin@example.com'
            ],
            [
                'name' => 'Administrator',
                'email' => 'admin@example.com',
                'password' => Hash::make('admin') 
            ]
        );

        $admin->assignRole($role);
    }
}
