import React from 'react';
import logo from '../../assets/img/logo.png'
import './styles.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={logo} alt="BuenoFlix"/>
            </a>
            <Button as='a' href='/'>
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;