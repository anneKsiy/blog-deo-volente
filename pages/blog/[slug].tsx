import React from "react";
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import Head from 'next/head'
import marked from 'marked';
import NavBar from "../../components/NavBar";

const Post = ({htmlString, data}: {htmlString: string, data: any}) => {
  return (
  <>
    <NavBar />
    <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
    </Head>
    <div dangerouslySetInnerHTML={{__html: htmlString}} />
    
  </>
  )
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
  

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params: {slug}} : {params: {slug: string}}) => {

    const markdownWithMetadata: string= fs.readFileSync(path.join('posts', slug + '.md')).toString();

    const parsedMarkdown: matter.GrayMatterFile<string> = matter(markdownWithMetadata);

    const htmlString: string = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}

export default Post;
