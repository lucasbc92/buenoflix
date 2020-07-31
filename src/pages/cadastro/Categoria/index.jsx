/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [form, setForm] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([
      ...categorias,
      form,
    ]);
    setForm(valoresIniciais);
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        const responseJSON = await response.json();
        setCategorias([
          ...responseJSON,
        ]);
      });
  }, [
    form.nome,
  ]);

  return (
    <Layout>
      <h1>
        Cadastro de Categoria:
        {form.nome}
      </h1>

      <form style={{ background: form.cor }} onSubmit={handleSubmit}>
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            value={form.nome}
            name="nome"
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

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.nome}${index}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </Layout>
  );
};

export default CadastroCategoria;
