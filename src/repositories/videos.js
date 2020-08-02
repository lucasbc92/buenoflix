/* eslint-disable arrow-body-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const create = (objetoDoVideo) => {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      const responseJSON = await response.json();
      return responseJSON;
    });
};

export default {
  create,
};
