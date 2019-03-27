const Calc = require("./index");

describe("Calculator tests", () => {
  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1)).toEqual({ num: 2 });
  });

  test("should be able to add multiple numbers", () => {
    expect(new Calc(1).add(1).add(1)).toEqual({ num: 3 });
  });

  test("should be able to substract 1 - 1", () => {
    expect(new Calc(1).substract(1)).toEqual({ num: 0 });
  });

  test("should be able to substract multiple numbers", () => {
    expect(new Calc(5).substract(1).substract(1)).toEqual({ num: 3 });
  });

  test("should be able to multiply 1 * 1", () => {
    expect(new Calc(1).multiply(1)).toEqual({ num: 1 });
  });

  test("should be able to multiply multiple numbers", () => {
    expect(new Calc(1).multiply(1).multiply(1)).toEqual({ num: 1 });
  });

  test("should be able to divide 1 / 1", () => {
    expect(new Calc(1).divide(1)).toEqual({ num: 1 });
  });

  test("should be able to devide multiple numbers", () => {
    expect(new Calc(1).divide(1).divide(1)).toEqual({ num: 1 });
  });

  test("should be able to return a result", () => {
    expect(
      new Calc(1)
        .divide(1)
        .divide(1)
        .result()
    ).toEqual(1);
  });

  test("Dont accept strings", () => {
    expect(() => new Calc(100).add("onehundret")).toThrow("No strings allowed");
  });

  test("Dont accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundret" })).toThrow(
      "No object allowed"
    );
  });
});
