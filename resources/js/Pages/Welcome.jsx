import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, posts }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="welcome-container">
                <h1 className="welcome-title">Posts</h1>
                
                <nav className="mt-4 wel-nav">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="welcome-button"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="welcome-button"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="welcome-button"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>

                <div className="posts-container">
                    {posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-content">{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}