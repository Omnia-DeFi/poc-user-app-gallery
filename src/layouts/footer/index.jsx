import PropTypes from "prop-types";
import FooterLinkWidget from "@widgets/footer-link-widget";
import SocialWidget from "@widgets/social-widget";
import { ItemType } from "@utils/types";

// Demo data
import footerData from "../../data/general/footer.json";
import contactData from "../../data/general/contact.json";

const Footer = () => (
    <div className="copy-right-one ptb--20 bg-color--1 mt--150">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                    <div className="copyright-left">
                        <span>{footerData.copyright_text}</span>
                        <FooterLinkWidget
                            data={footerData["footer-link-widget"]}
                        />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                    <div className="copyright-right">
                        <SocialWidget socials={contactData.socials} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Footer.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(ItemType),
    }),
};
export default Footer;
