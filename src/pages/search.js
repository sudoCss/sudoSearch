import CustomHead from "../components/CustomHead";
import PaginationUrls from "../components/PaginationUrls";
import Results from "../components/Results";
import SearchArea from "../components/SearchArea";
import fakeData from "../fakeData/cat.res";

const Search = ({
    q,
    results,
    nextPage,
    previousPage,
    searchTime,
    totalResults,
}) => {
    return (
        <>
            <CustomHead title={`Results of ${q} | sudoSearch`} />
            <main className="w-screen max-w-2xl flex flex-col mx-auto gap-2 px-2 mb-1">
                <SearchArea q={q} />
                <Results
                    results={results}
                    searchTime={searchTime}
                    totalResults={totalResults}
                />
                <PaginationUrls
                    base={`/search?q=${q}`}
                    nextPage={nextPage}
                    previousPage={previousPage}
                />
            </main>
        </>
    );
};

export async function getServerSideProps({ query }) {
    if (!query.q || query.q === "") {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        };
    }

    let url = "";
    if (process.env.NODE_ENV === "production") {
        url = `${process.env.API_BASE_URL}key=${process.env.API_KEY}&cx=${
            process.env.API_CX
        }&q=${query.q}&num=10${query.start ? `&start=${query.start}` : ""}`;
    }

    try {
        const res = url === "" ? fakeData : await fetch(url);
        const data = await res.json();
        return {
            props: {
                q: query.q,
                results: data.items,
                searchTime: data.searchInformation.formattedSearchTime,
                totalResults: data.searchInformation.formattedTotalResults,
                nextPage: data.queries?.nextPage?.at(0).startIndex || -1,
                previousPage:
                    data.queries?.previousPage?.at(0).startIndex || -1,
            },
        };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: "/500",
            },
            props: {},
        };
    }
}

export default Search;
