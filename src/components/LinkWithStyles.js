import Link from "next/link";

const LinkWithStyles = ({ href, children }) => {
    return (
        <Link className="font-bold text-blue-700 break-words" href={href} target="_blank">
            {children}
        </Link>
    );
};
export default LinkWithStyles;
