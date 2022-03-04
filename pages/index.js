import Head from 'next/head';

import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Ersin's Blog</title>
        <meta
          name='description'
          content='I blog about shopify ecommerce development with various APIs and technologies.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
