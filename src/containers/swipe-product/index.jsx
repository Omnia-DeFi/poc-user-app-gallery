/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useMemo, useEffect, useRef } from "react";
import Product from "@components/product";
import PropTypes from "prop-types";
import { SectionTitleType, ProductType } from "@utils/types";
import TinderCard from "react-tinder-card";
import Button from "@ui/button";

const SwipeProduct = ({ data, swipe }) => {
    const [currentIndex, setCurrentIndex] = useState(data.products.length - 1);
    const [showCards, setShowCards] = useState(false);
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

    const swiped = (index) => {
        updateCurrentIndex(index - 1);
    };

    const canSwipe = currentIndex >= 0;

    useEffect(() => {
        setShowCards(canSwipe);
    }, [currentIndex]);

    const swipeInDirection = async (dir) => {
        if (canSwipe && currentIndex < data.products.length) {
            await childRefs[currentIndex].current.swipe(dir);
        }
    };

    return (
        <>
            {showCards ? (
                <div style={{ position: "relative" }}>
                    <div className="swipe-card-container">
                        {data.products.map((prod, index) => (
                            <div className="swipe" key={prod.id}>
                                <TinderCard
                                    onSwipe={() => swiped(index)}
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
                        onKeyPress={() => swipeInDirection("right")}
                        role="button"
                        tabIndex={0}
                        aria-label="swipe-right"
                        onClick={() => swipeInDirection("right")}
                        className="feather-arrow-right-circle swipe-right-arrow"
                    />

                    <i
                        onKeyPress={() => swipeInDirection("left")}
                        role="button"
                        tabIndex={0}
                        aria-label="swipe-right"
                        onClick={() => swipeInDirection("left")}
                        className="feather-arrow-left-circle swipe-left-arrow"
                    />
                </div>
            ) : (
                <div className="products-again-container">
                    <p>You have seen all the assets</p>
                    <Button
                        onClick={() => {
                            setShowCards(true);
                            setCurrentIndex(data.products.length - 1);
                        }}
                    >
                        See assests again
                    </Button>
                </div>
            )}
        </>
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
