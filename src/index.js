import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import Pagina404 from './pages/Pagina404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/' component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);