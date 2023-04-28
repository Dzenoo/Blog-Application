import React from "react";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <Featured posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
