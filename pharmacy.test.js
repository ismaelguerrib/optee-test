import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
  it("should decrease the benefit twice as fast when expired", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });
  it("should not decrease the benefit below 0", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });
  it("should not increase the benefit above 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });
});
