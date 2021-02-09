import React from 'react';

export interface BlogProps {
    slug: any;
}

export const BlogCard = (props: BlogProps) => {
    const {slug} = props
    return (
        <div className="container mx-auto">
            <h3 className="text-xl">
                <a className="hover:text-white" href={"/blog/" + slug}>{slug}</a>
            </h3>
        </div>
    )
}

export default BlogCard