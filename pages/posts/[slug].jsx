import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const post = getPostData(params.slug);

  return {
    props: {
      post: post,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const data = getPostsFiles();
  const pathParams = data.map((p) => p.replace(/\.md$/, ""));

  return {
    paths: pathParams.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
