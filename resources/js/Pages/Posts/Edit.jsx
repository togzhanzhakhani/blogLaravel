import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ post }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/posts/${post.id}`, { title, content });
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-input" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label className="form-label">Content:</label>
                    <textarea className="form-textarea" value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit" className="form-button">Save Changes</button>
            </form>
        </div>
    );
};

export default Edit;
