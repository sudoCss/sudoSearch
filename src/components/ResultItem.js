import LinkWithStyles from "./LinkWithStyles";

const ResultItem = ({ title, link, displayLink, formattedUrl, snippet }) => {
    return (
        <li className="flex flex-col gap-1 my-4 p-4 rounded-md shadow-gray-100 shadow-md">
            <p className="text-stone-400 text-sm">{displayLink}</p>
            <h2 className="font-extrabold">{title}</h2>
            <LinkWithStyles href={link} >
                {formattedUrl}
            </LinkWithStyles>
            <p className="">{snippet}</p>
        </li>
    );
};
export default ResultItem;
