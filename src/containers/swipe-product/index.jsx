import React, { useState, useRef, useMemo } from "react";
import Product from "@components/product";
import PropTypes from "prop-types";
import { SectionTitleType, ProductType } from "@utils/types";
import TinderCard from "react-tinder-card";

const SwipeProduct = ({ data, swipe }) => {
    const [currentIndex, setCurrentIndex] = useState(data.products.length - 1);
    const [lastDirection, setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () =>
            Array(data.products.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    );

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const canGoBack = currentIndex < data.products.length - 1;

    const canSwipe = currentIndex >= 0;

    const swipeInDirection = async (dir) => {
        if (canSwipe && currentIndex < data.products.length) {
            await childRefs[currentIndex].current.swipe(dir);
        }
    };

    return (
        <div style={{ position: "relative" }}>
            <div className="swipe-card-container">
                {data.products.slice(0, 10).map((prod, index) => (
                    <div className="swipe" key={prod.id}>
                        <TinderCard
                            onSwipe={(dir) => swiped(dir, prod, index)}
                            ref={childRefs[index]}
                            preventSwipe={["up", "down"]}
                        >
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
                                    swipe={swipe}
                                />
                            </div>
                        </TinderCard>
                    </div>
                ))}
            </div>
            <i
                onClick={() => swipeInDirection("left")}
                className="feather-arrow-right-circle swipe-right-arrow"
            />

            <i className="feather-arrow-left-circle swipe-left-arrow" />
        </div>
    );
};

SwipeProduct.propTypes = {
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        placeBid: PropTypes.bool,
    }),
    swipe: PropTypes.bool,
};

export default SwipeProduct;
