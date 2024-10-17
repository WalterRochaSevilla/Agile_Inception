import sumar from "./sumador.js";

describe("Gastos", () => {
  it("Registrar un gasto", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
