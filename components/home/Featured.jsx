import React from "react";
import classes from "./Featured-posts.module.css";
import PostGrid from "../posts/PostGrid";

const Featured = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default Featured;
