import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";

const MainMenu = ({ menu }) => (
    <ul className="mainmenu">
        {menu.map((nav) => (
            <li
                key={nav.id}
                className={clsx(
                    !!nav.submenu && "has-droupdown has-menu-child-item",
                    !!nav.megamenu && "with-megamenu"
                )}
            >
                <Anchor className="its_new" path={nav.path}>
                    {nav.text}
                </Anchor>
            </li>
        ))}
    </ul>
);

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;
