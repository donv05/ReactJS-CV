/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import axios from "../../configurations/axiosConfig";
// eslint-disable-next-line no-unused-vars
import { useHistory } from "react-router";

function Header() {
    // eslint-disable-next-line no-unused-vars
    // const [match, setMatch] = useState(useRouteMatch());
    // hot fix
    const match = {
      url: '.'
    }
    const [hiddenDro, setHiddenDro] = useState(false);
    const [info, setInfo] = useState(
        JSON.parse(localStorage.getItem("userInformation"))
    );
    const history = useHistory();

    const jsSidenav = useRef(null);
    const [isSidenav, setIsSidenav] = useState(false);

    useEffect(() => {});

    function handleClickLogout(event) {
        axios
        .post("/users/logout")
        .then((result) => {
            if (result) {
                localStorage.removeItem("userInformation");
                history.push("/login");
            }
        })
        .catch(function (error) {})
        .finally(function () {
            // always executed
        });
    }


  return (
    <React.Fragment>
    <div className="navigation">
        <input type="checkbox" id="navigate-toggle" className="navigation__checkbox"></input>
        <label className="navigation__button" htmlFor="navigate-toggle" >
                <span className="navigation__icon"></span>
        </label>
        <div className="navigation__bg"></div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a  className="navigation__link" href={`${match.url}/home`} >home</a>
                </li>
                <li className="navigation__item">
                    <a  className="navigation__link" href={`${match.url}/about-me`}>About me</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href={`${match.url}/blog`}>blog</a>
                </li>
            </ul>

            <div className="navigation__sub-list">
                <div className="navigation__sub-list navigation__sub-list--modifier">
                    <button className="navigation__sub-list__link u-btn-link " 
                    onClick={() => {
                    setHiddenDro(true);
                    }}
                    href={`${match.url}/profile`}>Profile</button>
                </div>
                <div className="navigation__sub-list navigation__sub-list--modifier">
                    <button className="navigation__sub-list__link u-btn-link " onClick={handleClickLogout}>Logout</button>
                </div>
            </div>
        </nav>
    </div>    
    <div className="page-header page-header--hover-delay">
        <div className="header-wrapper header-wrapper--zoom-in-image">
            <div className="header-content-wrapper">
                <h1 className="header-content-wrapper__title">TRUST</h1>
                <div className="header-content-wrapper__txt">
                    Muốn trưởng thành, bạn phải cần biết đi qua những gian khó cuộc đời.
                    <br />
                    Muốn thành công, bạn cần biết vượt lên chính mình, để được những gì
                    xứng đáng.
                </div>
            </div>
        </div>
        <div className="header-picture">
            {/* <picture>
                <img alt="img header" className="page-header-picture__content" src="/header-img.jpg" width="100%" height="100%" ></img>
            </picture> */}
            <div className="header-picture__content"></div>
        </div>
    </div>
    
    </React.Fragment>
  );
}

export default Header;
