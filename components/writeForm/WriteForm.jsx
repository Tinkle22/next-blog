"use client"
import styles from './writeForm.module.css'
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditorWriteForm = () => {
    const [title, setTitle] = useState("");
    const [firstSegment, setFirstSegment] = useState('');
    const [secondSegment, setSecondSegment] = useState('');
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [thumbNail, setThumbNail] = useState(null);
    const [authorImg, setAuthorImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('firstSegment', firstSegment);
        formData.append('secondSegment', secondSegment);
        formData.append('author', author);
        formData.append('category', category);
        if (image) formData.append('image', image);
        if (authorImg) formData.append('authorImg', authorImg);

        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create blog post');
            }

            const data = await response.json();
            console.log('Blog post created:', data);
            router.push('/admin'); // Redirect to user to dashboard page
        } catch (error) {
            console.error('Error creating blog post:', error);
            // Handle error (e.g., show error message to user)
        } finally {
            setLoading(false);
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'background': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    return (
        <div className={styles.blogForm}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        className={styles.textInput}
                        placeholder='Enter Title' 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div >
                    <input
                        className={styles.textInput}
                        placeholder='Enter Author' 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className={styles.textInput} 
                        placeholder='Enter Category' 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className={styles.editorContainer}>
                    <ReactQuill 
                        value={firstSegment} 
                        onChange={setFirstSegment} 
                        modules={modules} 
                        placeholder="Write your first segment here..."
                    />
                </div>
                <div className={styles.editorContainer}>
                    <ReactQuill 
                        value={secondSegment} 
                        onChange={setSecondSegment} 
                        modules={modules} 
                        placeholder="Write your second segment here..."
                    />
                </div>
                <div className={styles.fileInput}>
                    <label>Blog Image:</label>
                    <input 
                        type="file" 
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                {/* <div className={styles.fileInput}>
                    <label>THumbNail Image:</label>
                    <input 
                        type="file" 
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div> */}
                <div className={styles.fileInput}>
                    <label>Author Image (optional):</label>
                    <input 
                        type="file" 
                        onChange={(e) => setAuthorImg(e.target.files[0])}
                    />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Blog'}
                </button>
            </form>
        </div>
    );
}

export default RichTextEditorWriteForm;