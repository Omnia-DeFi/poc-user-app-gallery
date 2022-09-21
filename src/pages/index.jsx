import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";
import ExploreProductArea from "@containers/explore-product";
import { normalizedData } from "@utils/methods";
import { useEffect } from "react";
import { useUserContext } from "src/context/context";
import { loginUser } from "src/context/actions";
import { magic } from "../utils/magic";
import { createUser } from "../utils/createUser";

// Demo Data
import homepageData from "../data/homepages/home.json";
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    const { dispatch } = useUserContext();

    useEffect(() => {
        magic.user.isLoggedIn().then((magicIsLoggedIn) => {
            if (magicIsLoggedIn) {
                magic.user.getMetadata().then((user) => {
                    createUser(user);
                    dispatch(loginUser(user));
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <ServiceArea data={content["service-section"]} />
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
