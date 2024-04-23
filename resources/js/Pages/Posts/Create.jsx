import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';


const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/posts', { title, content });
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-input" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label className="form-label">Content:</label>
                    <textarea className="form-textarea" value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default Create;
