import React from "react";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";

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

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
