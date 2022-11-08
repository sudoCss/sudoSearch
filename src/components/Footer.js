import LinkWithStyles from "./LinkWithStyles";

const Footer = () => {
    return (
        <footer className="text-center font-mono text-stone-400 py-2">
            <p>
                Made with ❤️ by{" "}
                <LinkWithStyles href={"https://github.com/sudoCss"}>
                    @sudoCss
                </LinkWithStyles>
            </p>
        </footer>
    );
};
export default Footer;
