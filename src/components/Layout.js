import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
            <Footer />
        </div>
    );
};
export default Layout;
