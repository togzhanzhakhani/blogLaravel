import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link as InertiaLink } from '@inertiajs/react';

export default function Dashboard({ auth, users, posts }) {
    const isAdmin = auth.user.roles.some(role => role.name === 'admin');
    const isModerator = auth.user.roles.some(role => role.name === 'moderator');

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="dashboard-container">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="panel">
                        {isAdmin ? (
                            <div>
                                <div className="panel-title">Admin Panel: You're logged in as an administrator!</div>
                                
                                <div className="mt-4">
                                    <h3 className="panel-title">Users Management</h3>
                                    {users.map((user) => (
                                        <div key={user.id} className="user-item">
                                            <p className="post-man-title">{user.name} - {user.roles.join(', ')}</p>
                                            <InertiaLink href={route('admin.edit', user.id)} className="edit-button">Edit</InertiaLink>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-6">
                                    <h3 className="panel-title">Posts Management</h3>
                                    <div className='post-man-cont'>
                                        {posts.map((post) => (
                                            <div key={post.id} className="post-item">
                                                <p className="post-man-title">{post.title}</p>
                                                <InertiaLink href={route('posts.destroy', post.id)} method="delete" as="button" className="delete-button">Delete</InertiaLink>
                                            </div>
                                        ))}
                                    </div>
                                    <InertiaLink href={route('posts.create')} className="create-button">Create New Post</InertiaLink>
                                </div>
                            </div>
                        ) : isModerator ? (
                            <div>
                                <div className="panel-title">Moderator Panel: You're logged in as a moderator!</div>
                                <div className="mt-4">
                                    <h3 className="panel-title">Posts Management</h3>
                                    {posts.map((post) => (
                                        <div key={post.id} className="post-item">
                                            <p className="post-man-title">{post.title}</p>
                                            <InertiaLink href={route('posts.edit', post.id)} className="edit-button">Edit</InertiaLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="panel-title">You're logged in!</div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
