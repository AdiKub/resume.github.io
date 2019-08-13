import React from 'react'
import './styles.scss'
import Logo from '../../assets/images/logo.svg'


const Header = () => {
    const navs = ['resume', 'about me', 'contacts', 'works']
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-title'>
                        <div className='header-title-logo'>
                            <img
                                className='header-title-logo__img'
                                src={Logo}
                                alt='logo'/>
                        </div>
                        <h1 className='header-title__text'>
                            ADILET KUBATBEK UULU
                        </h1>
                    </div>
                        <ul className='header-navs'>
                            {navs.map(nav =>
                                <li
                                    className='header-navs__link'
                                    key={nav}>
                                    {nav}
                                </li> )}
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Header