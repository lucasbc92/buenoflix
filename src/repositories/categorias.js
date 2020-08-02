/* eslint-disable arrow-body-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIES_WITH_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

const create = (objetoDaCategoria) => {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (response) => {
      const responseJSON = await response.json();
      return responseJSON;
    });
};

const getAll = () => {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      const responseJSON = await response.json();
      return responseJSON;
    });
};

const getAllWithVideos = () => {
  return fetch(URL_CATEGORIES_WITH_VIDEOS)
    .then(async (response) => {
      if (response.ok) {
        const responseJSON = await response.json();
        // console.log('*** getAllWithVideos.responseJSON', responseJSON);
        return responseJSON;
      }

      throw new Error('Não foi possível pegar os dados');
    });
};
export default {
  create,
  getAll,
  getAllWithVideos,
};
