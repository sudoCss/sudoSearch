import Head from "next/head";

const CustomHead = ({ title = "sudoSearch", description = "" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};
export default CustomHead;
