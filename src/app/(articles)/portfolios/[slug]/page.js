import { ContentHeader } from "@/components/ContentHeader";
import { getPortfolioBySlug, getPortfolios } from "@/utils";

export function generateStaticParams () {
    const portfolios = getPortfolios();

    return portfolios.map(portfolio =>({
        slug: portfolio.slug
    }))
}


const PorfolioDetails = async ({params}) => {
    const portfolio = await getPortfolioBySlug(params.slug);

    return (
        <>
            <ContentHeader
                title={portfolio.title}
                description={portfolio.description}
                coverImage={portfolio.coverImage}
                authorImage={portfolio.employeeImage}
                date={portfolio.date}
                author={portfolio.employee}
            />
            <article className="prose lg:prose-lg markdown-image-50">
                <div dangerouslySetInnerHTML={{__html: portfolio.content}}></div>
            </article>
        </>
    )
}

export default PorfolioDetails;