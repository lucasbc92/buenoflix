import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

const CadastroVideo = () => {
  const valoresIniciais = {
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=WrNVMHLQ1bY',
    categoria: 'Front End',
  };

  const history = useHistory();

  const { form, handleForm } = useForm(valoresIniciais);

  const handleSubmit = (event) => {
    event.preventDefault();
    videosRepository.create({
      titulo: form.titulo,
      url: form.url,
      categoriaId: 6,
    })
      .then(() => {
        history.push('/');
      });
    // eslint-disable-next-line no-alert
    // alert('Vídeo cadastrado com sucesso!');
  };

  return (
    <Layout>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          type="text"
          value={form.titulo}
          name="titulo"
          onChange={handleForm}
        />

        <FormField
          label="URL"
          type="text"
          value={form.url}
          name="url"
          onChange={handleForm}
        />

        <FormField
          label="Categoria"
          type="text"
          value={form.categoria}
          name="categoria"
          onChange={handleForm}
        />

        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </Layout>
  );
};

export default CadastroVideo;
