import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/Layout";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <div style={{ marginBottom: "3.5rem" }}>
        <div
          style={{
            fontSize: "12px",
            color: "#aaa",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Brain Engineering · Korea University
        </div>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 500,
            lineHeight: 1.35,
            marginBottom: "1rem",
            color: "#111",
          }}
        >
          시각 피질과 딥러닝,
          <br />그 사이 어딘가
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#888",
            lineHeight: 1.75,
            maxWidth: "500px",
          }}
        >
          시각 신경과학과 계산 모델링을 연구합니다. 프로젝트와 생각들을 이곳에
          기록해요.
        </p>
      </div>

      <div
        style={{
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: "1rem",
        }}
      >
        최근 글
      </div>
      <div style={{ borderTop: "0.5px solid #e5e5e5" }}>
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{
              padding: "1.1rem 0",
              borderBottom: "0.5px solid #e5e5e5",
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <Link
                href={`/posts/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#111",
                    marginBottom: "4px",
                  }}
                >
                  {post.title}
                </div>
              </Link>
              <div
                style={{
                  fontSize: "13px",
                  color: "#888",
                  lineHeight: 1.6,
                  marginBottom: "8px",
                }}
              >
                {post.description}
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
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
            <div
              style={{
                fontSize: "12px",
                color: "#aaa",
                whiteSpace: "nowrap",
                paddingTop: "2px",
              }}
            >
              {post.date}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
