import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
    return (
        <Layout>
            <h1>Cadastro de Categoria</h1>

            <form>
                <label>
                Nome da Categoria:
                <input
                    type="text"
                />
                </label>

                <button>
                Cadastrar
                </button>
            </form>


            <Link to='/'>
                Ir para Home
            </Link>
        </Layout>
    );
};

export default CadastroCategoria;