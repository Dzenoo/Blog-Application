import React from "react";
import PostGrid from "./PostGrid";
import classes from "./All-posts.module.css";

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
