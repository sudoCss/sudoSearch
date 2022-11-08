import ResultItem from "./ResultItem";

const Results = ({ results, searchTime, totalResults }) => {
    return (
        <div className="">
            <p className="text-slate-400 font-mono my-2">
                About {totalResults} results ({searchTime} seconds) 
            </p>
            <ul>
                {results.map((result) => (
                    <ResultItem
                        key={result.cacheId}
                        title={result.title}
                        link={result.link}
                        displayLink={result.displayLink}
                        snippet={result.snippet}
                        formattedUrl={result.formattedUrl}
                    />
                ))}
            </ul>
        </div>
    );
};
export default Results;
