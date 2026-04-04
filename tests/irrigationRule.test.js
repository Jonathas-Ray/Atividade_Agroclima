//Então abaixo na linha 2 seria o import do Java (Static Import?)
const getAdvice = require("../backend/utils/irrigationRule");


//No JEstm a própria função test é "a marcação @test do JUnity" pulando
//a necessidade de uma função pra apenas executar a original.
test("temperatura alta", () => { //"Descrição que vai aparecer no Log"
//expect em JS é o Assert do Java, mas na ordem contrária
//os parametros são (valor real/função).toBe(valor esperado)
expect(getAdvice(35)).toBe("Irrigação URGENTE");
expect(getAdvice(31)).toBe("Irrigação URGENTE");
expect(getAdvice(30)).toBe("Irrigação moderada");
expect(getAdvice(20)).toBe("Irrigação moderada");
expect(getAdvice(19)).toBe("Não irrigar");
});