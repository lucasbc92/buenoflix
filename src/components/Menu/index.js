import React from 'react';
import logo from '../../assets/img/logo.png'
import './styles.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
//import ButtonLink from './components/ButtonLink';

const Menu = () => {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={logo} alt="BuenoFlix"/>
            </Link>
            <Button as={Link} to='/cadastro/video'>
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;