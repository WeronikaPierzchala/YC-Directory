import { StartupCard } from "../../components/StartupCard";
import { SearchFom } from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = Array.from({ length: 5 }).map((_, index) => ({
    _createdAt: new Date(),
    views: index + 2,
    author: { _id: index, name: "Some Name" },
    id: index,
    description: "asd asd asasdadsthdf",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    category: "Tech",
    title: "Startup",
  }));

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchFom query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length ? (
            posts.map((post) => <StartupCard key={post.id} post={post} />)
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
