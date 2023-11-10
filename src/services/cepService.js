const axios = require('axios');

class CepService {

  async findCep(cep) {
    try {
      return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    } catch (error) {
      return error;
    }
  }
}

module.exports = CepService;