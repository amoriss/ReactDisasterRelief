import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Disaster Relief</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/get-help" style={styles.navLink}>Get Help</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/donate" style={styles.navLink}>Donate</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/volunteer" style={styles.navLink}>Volunteer</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
    },
    title: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: '0',
        padding: '0',
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
    },
};

export default Navbar;