import PropTypes from "prop-types";

const ProductBid = ({ floorPrice }) => (
    <div className="bid-react-area">
        <div className="last-bid">{floorPrice} USD</div>
    </div>
);

ProductBid.propTypes = {
    floorPrice: PropTypes.string.isRequired,
};

export default ProductBid;
