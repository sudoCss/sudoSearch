import Link from "next/link";

const LinkWithStyles = ({ href, children }) => {
    return (
        <Link className="font-bold text-blue-700" href={href} target="_blank">
            {children}
        </Link>
    );
};
export default LinkWithStyles;
