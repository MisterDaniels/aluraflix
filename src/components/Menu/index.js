import React from 'react';

import Logo from '../../assets/img/logo.png';
import './menu.css';

import ButtonLink from '../Button';

function Menu() {
    return (
        <nav>
            <a href="/">
                <img className="logo" src={ Logo } alt="Aluraflix" />
            </a>

            <ButtonLink as="a" className="buttonLink" href="/" >
                Novo vídeo                
            </ButtonLink>
        </nav>
    );
}

export default Menu;