import React from "react";
import classes from "./Posts-grid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostGrid;
