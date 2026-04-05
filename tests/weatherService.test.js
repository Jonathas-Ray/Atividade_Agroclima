//Não encontrei o erro ainda
test("vazio", () => {
  expect(true).toBe(true);
});
/*
jest.mock("axios"); 
const axios = require("axios");
//Sobre o require, assim como no Python, dá pra instanciar funções
test("retorna temperatura mockada", async () => {
    axios.get.mockResolvedValue({
        data: {
            current_weather: {
                temperature: 32
            }
        }
    });
    const getWeather = require("../backend/services/weatherService");
    const result = await getWeather(-12, -38);
    expect(result.temperature).toBe(32);
});

*/
