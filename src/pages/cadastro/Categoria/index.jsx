/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { form, handleForm, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    categoriasRepository.create(form)
      .then(() => {
        clearForm();
      });
  };

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasResponse) => {
        setCategorias(categoriasResponse);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [form.titulo]);

  return (
    <Layout>
      <h1>
        Cadastro de Categoria:
        {form.titulo}
      </h1>

      <form style={{ background: form.cor }} onSubmit={handleSubmit}>
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            value={form.titulo}
            name="titulo"
            onChange={handleForm}
          />

          <FormField
            label="Descrição"
            type="textarea"
            value={form.descricao}
            name="descricao"
            onChange={handleForm}
          />

          <FormField
            label="Cor"
            type="color"
            value={form.cor}
            name="cor"
            onChange={handleForm}
          />
        </div>
        <Button>Cadastrar</Button>
      </form>

      {categorias.length
      && (
      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.titulo}${index}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      )}

      <Link to="/">
        Ir para Home
      </Link>
    </Layout>
  );
};

export default CadastroCategoria;
