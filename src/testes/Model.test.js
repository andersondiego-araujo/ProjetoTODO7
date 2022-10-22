const app = require("../app");
const request = require("supertest");

describe("Realizando testes das rotas da controller", () => {



    test("Testando rota adicao", async () => {
        const res = await request(app).get("/adicao").query([20, 30]);
        expect(res.statusCode).toBe(200);
        expect(res.body.erro).toBe(false);
        expect(res.body.resultado).toBe(50);
    });


    test("Testando rota subtracao", async () => {
        const res = await request(app).get("/subtracao").query([20, 30]);
        expect(res.statusCode).toBe(200);
        expect(res.body.erro).toBe(false);
        expect(res.body.resultado).toBe(-10);
    });


    test("Testando rota multiplicacao", async () => {
        const res = await request(app).get("/multiplicacao").query([2, 30]);
        expect(res.statusCode).toBe(200);
        expect(res.body.erro).toBe(false);
        expect(res.body.resultado).toBe(60);
    });


    test("Testando rota divisao", async () => {
        const res = await request(app).get("/divisao").query([20, 5]);
        expect(res.statusCode).toBe(200);
        expect(res.body.erro).toBe(false);
        expect(res.body.resultado).toBe(4);
    });
});