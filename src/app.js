const express = require("express");
const CalculadoraController = require("./controller/CalculadoraController");
const app = express();

app.use(express.json());

const port = 3000;



app.get("/adicao", CalculadoraController.adicao);
app.get("/subtracao", CalculadoraController.subtracao);
app.get("/multiplicacao", CalculadoraController.multiplicacao);
app.get("/divisao", CalculadoraController.divisao);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app
