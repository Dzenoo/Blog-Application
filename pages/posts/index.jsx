import React from "react";
import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/AllPosts";

const AllPostsPage = (props) => {
  return (
    <>
      <AllPosts posts={props.allPosts} />
    </>
  );
};
export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostsPage;
