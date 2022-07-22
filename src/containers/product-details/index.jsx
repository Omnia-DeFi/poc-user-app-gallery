import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import GalleryTab from "@components/product-details/gallery-tab";
import Button from "@ui/button";
import ProductTitle from "@components/product-details/title";
import BidTab from "@components/product-details/bid-tab";
import { ImageType } from "@utils/types";
import PlaceBidModal from "@components/modals/placebid-modal";
// Demo Image

const ProductDetailsArea = ({ space, className, product }) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <div
            className={clsx(
                "product-details-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <Sticky>
                            <GalleryTab images={product.images} />
                        </Sticky>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                        <div className="rn-pd-content-area">
                            <ProductTitle title={product.title} />
                            <h6 className="title-name">
                                #22 Portal , Info bellow
                            </h6>
                            <div className="rn-bid-details">
                                <BidTab
                                    bids={product?.bids}
                                    owner={product.owner}
                                    properties={product?.properties}
                                    tags={product?.tags}
                                    history={product?.history}
                                />
                                <div className="place-bet-area">
                                    <Button
                                        className="buy-btn"
                                        color="primary-alta"
                                        onClick={handleBidModal}
                                    >
                                        <span className="bid-amount">
                                            {product.highest_bid.amount}
                                        </span>
                                        Buy{" "}
                                    </Button>
                                </div>

                                <PlaceBidModal
                                    show={showBidModal}
                                    handleModal={handleBidModal}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        likeCount: PropTypes.number,
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
        owner: PropTypes.shape({}),
        collection: PropTypes.shape({}),
        bids: PropTypes.arrayOf(PropTypes.shape({})),
        properties: PropTypes.arrayOf(PropTypes.shape({})),
        tags: PropTypes.arrayOf(PropTypes.shape({})),
        history: PropTypes.arrayOf(PropTypes.shape({})),
        highest_bid: PropTypes.shape({
            amount: PropTypes.string,
        }),
        auction_date: PropTypes.string,
        images: PropTypes.arrayOf(ImageType),
    }),
};

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
