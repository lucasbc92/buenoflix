import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
    return (
        <Layout>
            <h1>Cadastro de Categoria</h1>
            <Link to='/'>
                Ir para Home
            </Link>
        </Layout>
    );
};

export default CadastroCategoria;