const Correios = require('correios.js');

const correios = new Correios();

module.exports = async (request, response) => {
  try {
    const { query } = request;

    if (!query.code) {
      response.status(422).json({ error: 'Invalid code' });
    } else {
      const object = await correios.track(query.code);

      response.status(200).json(object);
    }
  } catch (error) {
    response.status(500).json({ error: 'Error, try again later' });
  }
};
