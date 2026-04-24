import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function Post({ post }: { post: Post }) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{post.date}</p>
      <article className="prose prose-neutral">{post.content}</article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  return { props: { post } };
};
