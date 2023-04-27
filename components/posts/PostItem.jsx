import React from "react";
import classes from "./Posts-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ title, image, date, excerpt, slug }) => {
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    day: "long",
    day: "numeric",
  });

  const imagePath = `/images/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={200} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
