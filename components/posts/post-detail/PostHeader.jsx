import React from "react";
import classes from "./Post-header.module.css";
import Image from "next/image";

const PostHeader = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={250} height={150} />
    </header>
  );
};

export default PostHeader;
