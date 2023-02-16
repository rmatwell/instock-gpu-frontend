import '../index.css';

import CaretIcon from '../icons/caret.svg';
import ChevronIcon from '../icons/chevron.svg';
import ArrowIcon from '../icons/leftArrow.svg';
import GPUIcon from '../icons/gpu-icon.svg';
import DownloadIcon from '../icons/download.svg';
import ListingService from '../services/ListingService';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function Nav({ data }) {


    return (
        <Navbar>
            <div className="nav-icon">
                <a href="/">
                    <GPUIcon />
                </a>
            </div>
            <div className="nav-title">instock-gpu</div>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu></DropdownMenu>
                <div className="app-icon"><ChevronIcon /></div>
            </NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    function BrandList(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>{props.children}</a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon={<GPUIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="brands">
                        Brands
                    </DropdownItem>
                    <div onClick={() => ListingService.downloadFile()}>
                        <DropdownItem leftIcon={<DownloadIcon />}>Download Current Listings</DropdownItem>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'brands'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Brands</h2>
                    </DropdownItem>
                    <BrandList>ASUS</BrandList>
                    <BrandList>Gigabyte</BrandList>
                    <BrandList>MSI</BrandList>
                    <BrandList>PNY</BrandList>
                    <BrandList>Zotac</BrandList>
                </div>
            </CSSTransition>
        </div>
    );
}
export default Nav;