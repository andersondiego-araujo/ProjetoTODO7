const Calculadora = require("../model/Calculadora.js");

class CalculadoraController {


  static async adicao(req, res) {
    try {
      let query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const adicao = await Calculadora.adicao(...converteNumero);
      res.status(200).json({
        resultado: adicao,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensagem: "", erro: true });
      }
    }
  };


  static async subtracao(req, res) {
    try {
      let query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const subtracao = await Calculadora.subtracao(...converteNumero);
      res.status(200).json({
        resultado: subtracao,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensagem: "", erro: true });
      }
    }
  };


  static async multiplicacao(req, res) {
    try {
      let query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const multiplicacao = await Calculadora.multiplicacao(...converteNumero);
      res.status(200).json({
        resultado: multiplicacao,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensagem: "", erro: true });
      }
    }
  };


  static async divisao(req, res) {
    try {
      let query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const divisao = await Calculadora.divisao(...converteNumero);
      res.status(200).json({
        resultado: divisao,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensagem: "A divisão não pode ser por zero", erro: true });
      }
    }
  }
}

module.exports = CalculadoraController;
