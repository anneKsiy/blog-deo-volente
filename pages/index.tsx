import fs from 'fs';
import React from 'react';
import BlogCardList from '../components/BlogCardList';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Home = ({slugs} : {slugs: Object[]}) => (
  <>
    <div className="bg-gray-300 h-screen">
      <NavBar />
      <BlogCardList slugs={slugs}/>
      <Footer />
    </div>
  </>
)


export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', ''))
    }
  }
}

export default Home