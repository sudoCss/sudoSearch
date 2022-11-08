import Link from "next/link";

const PaginationUrl = ({ link, children }) => {
    return (
        <li className="h-8 aspect-square hover:scale-150 transition-all">
            <Link href={link} className="font-extrabold text-blue-700 text-2xl">
                {children}
            </Link>
        </li>
    );
};
export default PaginationUrl;
