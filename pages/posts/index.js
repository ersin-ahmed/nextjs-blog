import Head from 'next/head';

import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Blog Posts</title>
        <meta
          name='description'
          content='A list of all programming related content'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
