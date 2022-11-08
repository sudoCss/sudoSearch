import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Router from "next/router";
import { useRef, useEffect } from "react";

const SearchForm = ({ q }) => {
    const input = useRef(null);

    useEffect(() => {
        input.current.value = q ?? "";
    }, [q]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = input.current.value;
        if (!query || query === "" || query === q) return;
        Router.push(`/search?q=${query}`);
    };
    return (
        <>
            <form
                className="rounded-full border-2 focus-within:border-blue-300 px-2 shadow-gray-300 focus-within:shadow-blue-300 shadow-sm focus-within:shadow-md"
                action="/search"
                method="GET"
                onSubmit={handleSubmit}
            >
                <label className="flex justify-between items-center text-center gap-1">
                    <MagnifyingGlassIcon className="h-6 font-extrabold" />
                    <input
                        className="rounded-full p-2 py-1 focus:outline-none"
                        type={"text"}
                        name="q"
                        ref={input}
                        placeholder={"Type anything..."}
                    />
                </label>
            </form>
        </>
    );
};
export default SearchForm;
