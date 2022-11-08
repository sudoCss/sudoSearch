import SearchForm from "./SearchForm";
import SudoSearch from "./SudoSearch";

const SearchArea = ({ q }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-2 gap-4 my-4">
            <SudoSearch />
            <SearchForm q={q} />
        </div>
    );
};
export default SearchArea;
