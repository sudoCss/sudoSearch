import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import PaginationUrl from "./PaginationUrl";

const NOT_EXISTING = -1;

const PaginationUrls = ({ nextPage, previousPage, base }) => {
    const nextPageUrl = `${base}${
        nextPage !== NOT_EXISTING ? `&start=${nextPage}` : ""
    }`;
    const previousPageUrl = `${base}${
        previousPage !== NOT_EXISTING ? `&start=${previousPage}` : ""
    }`;

    return (
        <>
            {nextPage === NOT_EXISTING && previousPage === NOT_EXISTING ? (
                <p>No more results!</p>
            ) : (
                <ul className="flex justify-around py-2">
                    {previousPage !== NOT_EXISTING && (
                        <PaginationUrl
                            key={previousPageUrl}
                            link={previousPageUrl}
                        >
                            <ChevronLeftIcon />
                        </PaginationUrl>
                    )}
                    {nextPage !== NOT_EXISTING && (
                        <PaginationUrl key={nextPageUrl} link={nextPageUrl}>
                            <ChevronRightIcon />
                        </PaginationUrl>
                    )}
                </ul>
            )}
        </>
    );
};
export default PaginationUrls;
