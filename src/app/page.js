
import { BlogList } from "@/components/blogs/BlogList";
import { Hero } from "@/components/Hero";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { SectionTitle } from "@/components/SectionTitle";
import { getContentCount } from "@/utils";


export default async function Home() {
  const count = getContentCount();

  return (
    <>
      <Hero count={count} />
      <SectionTitle title={"Blogs"} href={"/blogs"} />
      <BlogList />
      <SectionTitle title={"Portfolios"} href={"/portfolios"} />
      <PortfolioList />
    </>
  );
}
