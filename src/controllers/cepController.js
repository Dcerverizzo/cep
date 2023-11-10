const CepService = require('../services/cepService')

class CepController {

  static async getCep(req, res) {
    const { cep } = req.params;
    try {
      const service = new CepService();
      const cepData = await service.findCep(cep);
      res.status(200).json(cepData.data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = CepController;