import React from 'react'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/search.svg'
import cartIcon from '../assets/cart.svg'
import { navlinks } from '../constants'

const NavBar = () => {
    return (
        <>
            <header>
                <nav className='px-[250px] py-6'>
                    <img src={logo} alt="logo" />

                    {/* creating nav links using an object and array */}
                    {/* {(() => {
                        const navLinksObj = {
                            store: "Store",
                            mac: "Mac",
                            iphone: "iPhone",
                            watch: "Watch",
                            airpods: "AirPods",
                            airpodsAlt: "Air Pods"
                        };
                        const navLinksArr = Object.values(navLinksObj);
                        return (
                            <ul>
                                {navLinksArr.map((link, idx) => (
                                    <li key={idx}>
                                        <a href="">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        );
                    })()} */}

                    <ul className='flex gap-[60px]'>
                        {navlinks.map(({ label }) => (
                            <li key={label} className='list-none'>
                                <a href={label}>{label}</a>
                            </li>
                        ))
                        }

                    </ul>

                    <div className='flex gap-4'>
                        <button>
                            <img src={searchIcon} alt="search icon" />
                        </button>
                        <button>
                            <img src={cartIcon} alt="search icon" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar