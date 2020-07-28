import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
    return (
        <Layout>
            <h1>Cadastro de Vídeo</h1>
            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </Layout>
    );
};

export default CadastroVideo;