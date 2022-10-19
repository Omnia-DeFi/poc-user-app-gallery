import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import CreateNewArea from "@containers/create-new";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "src/context/context";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const router = useRouter();

    const { state } = useUserContext();

    useEffect(() => {
        // if (
        //     !state.login ||
        //     state.kybState !== "verified" ||
        //     state.kycState !== "verified"
        // ) {
        //     router.push("/login");
        // }
    }, []);

    return (
        <Wrapper>
            <SEO pageTitle="Create New" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="Create New File" />
                <CreateNewArea />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
