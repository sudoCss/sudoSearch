import { Fredoka_One } from "@next/font/google";

const fredokaOne = Fredoka_One({
    weight: "400",
    subsets: ["sudoCss"],
});

const SudoSearch = () => {
    return (
        <>
            <h1 className={`${fredokaOne.className} text-4xl text-center`}>
                sudoSearch
            </h1>
        </>
    );
};
export default SudoSearch;
