import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [hovered, setHovered] = useState(null); //state for hovered nav itme
    const [dropdownOpen, setDropdownOpen] = useState(false); //state for dropdown visibility

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Disaster Relief</h1>
            <ul style={styles.navList}>
                <li
                    key="home"
                    style={styles.navItem}
                    onMouseEnter={() => setHovered(0)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Link
                        to="/"
                        style={{
                            ...styles.navLink,
                            backgroundColor: hovered === 0 ? 'red' : 'transparent',
                        }}


                    >
                    Home
                    </Link>
                </li>

                {['Get Help', 'Volunteer'].map((item, index) => (

                    <li
                        key={index + 1}
                        style={styles.navItem}
                        onMouseEnter={() => setHovered(index + 1)}
                        onMouseLeave={() => setHovered(null)}
                    >

                        <Link
                            to={`/${item.toLowerCase().replace(' ', '-')}`}
                            style={{
                                ...styles.navLink,
                                backgroundColor: hovered === index + 1 ? 'red' : 'transparent',
                            }}

                        >
                            {item}
                        </Link>
                    </li>
                ))}

                {/*Drop down for the Donate Option*/}
                <li
                    style={styles.navItem}
                    onMouseEnter={() => setDropdownOpen(true)} //open dropdown on hover
                    onMouseLeave={() => setDropdownOpen(false)} //close dropdown on hover
                >
                    <Link
                        to="/donate"
                        style={{
                            ...styles.navLink,
                            backgroundColor: dropdownOpen ? 'red' : 'transparent',
                        }}
                    >
                        Donate &#9662;
                    </Link>
                    {/*dropdown content that appears when hovered*/}
                    {dropdownOpen && (

                        <div className="dropdown-content" style={styles.dropdownContent}>
                            <Link to="/donate" style={styles.dropdownLink}>Money</Link>
                            <Link to="/donate" style={styles.dropdownLink}>Supplies</Link>
                        </div>

                    )}

                </li>
            </ul>
        </nav>
    );
};








//const Navbar = () => {
//    return (
//        <nav style={styles.navbar}>
//            <h1 style={styles.title}>Disaster Relief</h1>
//            <ul style={styles.navList}>
//                <li style={styles.navItem}>
//                    <Link to="/" style={styles.navLink}>Home</Link>
//                </li>
//                <li style={styles.navItem}>
//                    <Link to="/get-help" style={styles.navLink}>Get Help</Link>
//                </li>

//                <li style={styles.navItem}>
//                    <div className="dropdown">
//                        <Link to="/donate" style={styles.navLink}>Donate &#9662;</Link>
//                        <div className="dropdown-content">
//                            <Link to="/donate">Money</Link>
//                            <Link to="/donate">Supplies</Link>
//                        </div>
//                    </div>
//                </li>


//                <li style={styles.navItem}>
//                    <Link to="/volunteer" style={styles.navLink}>Volunteer</Link>
//                </li>
//            </ul>
//        </nav >
//    );
//};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        position: 'relative',
        border: '1px solid red',
        boxSizing: 'border-box',
        boxShadow: '0 2px 5px rgba(0,0,0, 0.2)',
    },
    title: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: '0',
        padding: '0',
        flexWrap: 'wrap',
    },
    navItem: {
        marginLeft: '20px',
        position: 'relative',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px 15px',
        transition: 'background-color 0.3s',
    },
    navLinkHover: {
        backgroundColor: 'red',
    },

    dropdownContent: {
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 1,
        minWidth: '160px',
        boxShadow: '0 2px 5px rgba(0,0,0, 0.2)',

    },

    dropdownLink: {
        display: 'block',
        padding: '12px 16px',
        color: 'black',
        textDecoration: 'none',
        transition: 'background-color 0.3s, color 0.3s',
    },
};

export default Navbar;