import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ActivityArea from "@containers/activity";

// Demo Data
import { useLocalStorage } from "react-use";
import { useEffect } from "react";
import { useRouter } from "next/router";
import activityData from "../data/activity.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Home = () => {
    const [isLoggedIn] = useLocalStorage("isLoggedIn");
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn, router]);

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
