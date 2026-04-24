import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags?: string[];
}

export default function Post({ post }: { post: Post }) {
  return (
    <Layout>
      <div style={{ marginBottom: "0.75rem" }}>
        <Link
          href="/"
          style={{ fontSize: "13px", color: "#1D9E75", textDecoration: "none" }}
        >
          ← 목록으로
        </Link>
      </div>
      <div
        style={{
          borderBottom: "0.5px solid #e5e5e5",
          paddingBottom: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#111",
            lineHeight: 1.35,
            marginBottom: "0.75rem",
          }}
        >
          {post.title}
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>{post.date}</span>
          <div style={{ display: "flex", gap: "6px" }}>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: "#E1F5EE",
                  color: "#0F6E56",
                  border: "0.5px solid #9FE1CB",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <article className="prose prose-neutral max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </Layout>
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
