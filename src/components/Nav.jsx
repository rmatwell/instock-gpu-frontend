import '../index.css';

import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/leftArrow.svg';
import { ReactComponent as GPUIcon } from '../icons/gpu-icon.svg';
import { ReactComponent as DownloadIcon } from '../icons/download.svg';
import ListingService from '../services/ListingService';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function Nav({ data, setFilteredData }) {

    const brands = data.map(b => b.brand);
    const uniqueBrands = [...new Set(brands.map(str => str.toLowerCase()))];

    return (
        <Navbar>
            <div className="nav-icon">
                <a href="/">
                    <GPUIcon />
                </a>
            </div>
            <div className="nav-title">instock-gpu</div>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu data={data} brands={uniqueBrands}></DropdownMenu>
                <div className="app-icon"><ChevronIcon /></div>
            </NavItem>
        </Navbar>
    );

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

    function DropdownMenu(data) {
        const [activeMenu, setActiveMenu] = useState('main');
        const [menuHeight, setMenuHeight] = useState(null);
        const dropdownRef = useRef(null);
        console.log("dropdown");
        const ddBrands = data.brands;
        const sortedBrands = ddBrands.map(brand => brand.toUpperCase()).sort();
        console.table(sortedBrands);

        useEffect(() => {
            setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
        }, [])

        return (
            <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

                <CSSTransition
                    in={activeMenu === 'main'}
                    timeout={2500}
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
                    timeout={2500}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}>
                    <div className="menu">
                        <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                            <h3>Brands</h3>
                        </DropdownItem>

                        {sortedBrands.map((value) => (
                            <BrandList key={value}>{value}</BrandList>
                        ))
                        }
                    </div>
                </CSSTransition>
            </div>
        );

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

        function filterData(brand) {
            console.log("clicked");
            console.log(brand);
            const nestedData = data.data;
            console.log(nestedData);
            const newData = nestedData.filter((listing) => listing.brand.toUpperCase() === brand);
            console.log(newData);
            setFilteredData(newData);
        };


        function BrandList(data) {
            return (
                <a className="menu-item" onClick={() => { console.log(data.children); filterData(data.children); }}>{data.children}</a>
            );
        }
    }
}
export default Nav;