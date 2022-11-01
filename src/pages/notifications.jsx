import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import NotificationsArea from "@containers/notifications";
import { getCookie } from "cookies-next";

// Demo Data
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
        const loginState = getCookie("login");
        if (!loginState) {
            router.push("/login");
        }
    }, [state, router]);

    return (
        <Wrapper>
            <SEO pageTitle="Acivity" />
            <Header />
            <main id="main-content">
                <NotificationsArea />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
