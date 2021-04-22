import { Wrapper } from "../styles/StyleComponent";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import homeIcon from "../images/home.png";
import inboxIcon from "../images/inbox.png";
import exploreIcon from "../images/explore.png";
import likeIcon from "../images/like.png";
import userIcon from "../images/user.png";

export default function MenuComponent() {
    return (
        <div className="menu">
            <Wrapper>
                <div className="menu__box">
                    <Link to="/">
                        <img className="menu__logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
                    </Link>
                    <div className="menu__search">
                        <input type="text" className="menu__search-input" placeholder="Tìm kiếm" />
                        <div className="menu__search-box">
                            <span className="menu__search-icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <span className="menu__search-text">
                                Tìm kiếm
                            </span>
                        </div>
                    </div>
                    <div className="menu_icons">
                        <div className="menu_icons-item">
                            <Link to="/">
                                <img src={homeIcon} alt=""/>
                            </Link>
                        </div>
                        <div className="menu_icons-item">
                            <Link to="/">
                                <img src={inboxIcon} alt=""/>
                            </Link>
                        </div>
                        <div className="menu_icons-item">
                            <Link to="/">
                                <img src={exploreIcon} alt=""/>
                            </Link>
                        </div>
                        <div className="menu_icons-item">
                            <Link to="/">
                                <img src={likeIcon} alt=""/>
                            </Link>
                        </div>
                        <div className="menu_icons-item">
                            <Link to="/">
                                <img className="menu_icons-item__user" src={userIcon} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}