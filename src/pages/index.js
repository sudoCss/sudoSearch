import CustomHead from "../components/CustomHead";
import SearchArea from "../components/SearchArea";

const Home = () => {
    return (
        <>
            <CustomHead
                description={"The GOAT search engine ever made by human kind"}
            />
            <main className="h-screen w-full mt-[-30px] grid place-items-center">
                <SearchArea />
            </main>
        </>
    );
};

export default Home;
