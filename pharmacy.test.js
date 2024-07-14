import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateDrugValue()).toEqual([
      new Drug("test", 1, 2)
    ]);
  });
  it("should decrease the benefit twice as fast when expired", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateDrugValue()).toEqual([
      new Drug("test", -1, 1)
    ]);
  });
  it("should not decrease the benefit below 0", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateDrugValue()).toEqual([
      new Drug("test", -1, 0)
    ]);
  });
  it("should not increase the benefit above 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateDrugValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });
  it("should increase benefit each day for Herbal Tea.", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateDrugValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("should increase benefit twice as fast when expired for Herbal Tea.", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateDrugValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
  it("should not update expiresIn or benefit values for Magic Pill.", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateDrugValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
  it("should increase benefit each day when expiresIn is more than 11 for Fervex.", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 3)]).updateDrugValue()
    ).toEqual([new Drug("Fervex", 11, 4)]);
  });
  it("should increase benefit twice as fast when expiresIn is less than 11 for Fervex.", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateDrugValue()
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });
  it("should increase benefit three times as fast when expiresIn is less than 6 for Fervex.", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateDrugValue()).toEqual([
      new Drug("Fervex", 4, 6)
    ]);
  });
  it("should set benefit to 0 when expired for Fervex.", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateDrugValue()).toEqual([
      new Drug("Fervex", -1, 0)
    ]);
  });
  it("should decrease benefit twice as fast each day for Dafalgan.", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateDrugValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("should decrease benefit four times as fast when expired for Dafalgan.", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 8)]).updateDrugValue()
    ).toEqual([new Drug("Dafalgan", -1, 4)]);
  });
});
