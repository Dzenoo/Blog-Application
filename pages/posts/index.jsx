import React from "react";
import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

const AllPostsPage = () => {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default AllPostsPage;
