const Correios = require('correios.js');

const correios = new Correios();

module.exports = async (request, response) => {
  try {
    const { query } = request;

    if (!query.code) {
      return response.status(422).json({ error: 'Invalid code' });
    }

    const object = await correios.track(query.code);

    return response.status(200).json(object);
  } catch (error) {
    console.error(error);

    return response.status(500).json({ error: 'Error, try again later' });
  }
};
