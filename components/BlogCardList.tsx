import { SSL_OP_SINGLE_DH_USE } from 'constants';
import React from 'react';
import BlogCard from './BlogCard';

export interface BlogCardListProps {
    slugs: Object[];
}
export const BlogCardList = (props: BlogCardListProps) => {
    const {slugs} = props;
    return (
        <>
            {slugs.map((slug: any) => <BlogCard slug={slug} key={slug} />)}
        </>
    )
}

export default BlogCardList;