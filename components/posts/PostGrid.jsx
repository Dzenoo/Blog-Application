import React from "react";
import classes from "./Posts-grid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </ul>
  );
};

export default PostGrid;
