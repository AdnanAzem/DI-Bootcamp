import {Link, useLocation} from 'react-router'

const Nav = (props) => {

    const location = useLocation();

    const getLinkStyle = (path) => ({
        color: location.pathname === path ? 'white' : 'blue',
        backgroundColor: location.pathname === path ? 'blue' : 'transparent',
        padding: '10px',
        borderRadius: '4px'
    });

    return (
        <>
            <header>
                <nav>
                    <Link to='/' style={getLinkStyle('/')}>Home{" "}</Link>
                    <Link to='/profile' style={getLinkStyle('/profile')}>Profile{" "}</Link>
                    <Link to='/shop' style={getLinkStyle('/shop')}>Shop{" "}</Link>
                </nav>
            </header>
        </>
    )
}

export default Nav;