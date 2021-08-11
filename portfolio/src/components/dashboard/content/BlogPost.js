import React from 'react';
import { BlogContainer } from '../../../styles/dashboard/Dashboard';

const BlogPost = () => {
    return (
        <BlogContainer>
            <h3>Blog Post</h3>
            <section id="blog-contents">
                <section className="blog-post latest-post">Blog Post HERE</section>
                <div id="blog-list">
                    <section className="blog-post">Blog Post HERE</section>
                    <section className="blog-post">Blog Post HERE</section>
                    <section className="blog-post">Blog Post HERE</section>
                </div>
            </section>
        </BlogContainer>
    )
};

export default BlogPost;