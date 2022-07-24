import Product from "@components/product";
import PropTypes from "prop-types";
import { SectionTitleType, ProductType } from "@utils/types";
import TinderCard from "react-tinder-card";

const SwipeProduct = ({ data }) => (
    <div className="swipe-card-container">
        {data.products.slice(0, 10).map((prod) => (
            <div className="swipe" key={prod.id}>
                <TinderCard preventSwipe={["up", "down"]}>
                    <div className="swipe-card">
                        <Product
                            overlay
                            placeBid={!!data.placeBid}
                            title={prod.title}
                            slug={prod.slug}
                            latestBid={prod.latestBid}
                            price={prod.price}
                            likeCount={prod.likeCount}
                            auction_date={prod.auction_date}
                            image={prod.images?.[0]}
                            authors={prod.authors}
                            bitCount={prod.bitCount}
                        />
                    </div>
                </TinderCard>
            </div>
        ))}
    </div>
);

SwipeProduct.propTypes = {
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        placeBid: PropTypes.bool,
    }),
};

export default SwipeProduct;
