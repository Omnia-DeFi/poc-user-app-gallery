import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ActivityArea from "@containers/activity";

// Demo Data
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "src/context/context";
import activityData from "../data/activity.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Home = () => {
    const router = useRouter();

    const { state } = useUserContext();

    useEffect(() => {
        if (!state.login) {
            router.push("/login");
        }
    }, [state, router]);

    return (
        <Wrapper>
            <SEO pageTitle="Acivity" />
            <Header />
            <main id="main-content">
                <ActivityArea data={{ activities: activityData }} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
