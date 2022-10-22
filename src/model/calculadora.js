class Calculadora {
  static async adicao(numero1, numero2) {
    return numero1 + numero2;
  };

  static async subtracao(numero1, numero2) {
    return numero1 - numero2;
  };

  static async multiplicacao(numero1, numero2) {
    return numero1 * numero2;
  };

  static async divisao(numero1, numero2) {
    if (numero2 == 0) {
      throw new Error("A divisão não pode ser por zero");
    }

    else {
      return numero1 / numero2;
    }
  }
}

module.exports = Calculadora;
