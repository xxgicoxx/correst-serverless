const Correios = require('correios.js');

const constants = require('./_constants');

const correios = new Correios();

module.exports = async (request, response) => {
  try {
    const { query } = request;
    const { code } = query;

    if (!code || code.length < constants.CODE_MIN || code.length > constants.CODE_MAX) {
      return response.status(422).json({ error: constants.ERROR_INVALID_CODE });
    }

    const object = await correios.track(query.code);

    return response.status(200).json(object);
  } catch (error) {
    console.error(error);

    return response.status(500).json({ error: constants.ERROR_TRY_AGAIN });
  }
};
