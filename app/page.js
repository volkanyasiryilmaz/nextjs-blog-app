import BlogCard from "@/components/BlogCard"

async function getData() {
  const response = await fetch('https://dummyjson.com/posts?limit=15')
  return response.json();
}

export default async function Home() {
  const { posts } = await getData();
  return (
    <main>
      {
        posts.map(
          (post) => <BlogCard key={post.id} {...post} />
        )
      }
    </main>
  )
}
