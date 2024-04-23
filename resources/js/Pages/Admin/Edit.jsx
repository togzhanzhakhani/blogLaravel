import React from 'react';
import { Link as InertiaLink } from '@inertiajs/react';

export default function Edit({ user, roles, csrf_token }) {
    return (
        <div className="form-container">
            <h1 className="form-title">Edit User</h1>
            <form action={`/admin/update/${user.id}`} method="POST">
                <input type="hidden" name="_token" value={csrf_token} />
                <input type="hidden" name="_method" value="PUT" />

                <div>
                    <label className="form-label">Name:</label>
                    <p>{user.name}</p>
                </div>

                <div>
                    {roles.map((role) => (
                        <label key={role.id} className="form-label">
                            <input
                                type="checkbox"
                                name="roles[]"
                                value={role.name}
                                defaultChecked={user.roles.some(userRole => userRole.name === role.name)}
                            />
                            {role.name}
                        </label>
                    ))}
                </div>

                <button type="submit" className="form-button">Save</button>
            </form>
            <InertiaLink href="/dashboard" className="link-button">Back to Dashboard</InertiaLink>
        </div>
    );
}


