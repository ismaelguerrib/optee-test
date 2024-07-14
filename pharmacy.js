export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (drug.name === "Herbal Tea") {
        this.handleHerbalTea(drug);
      } else if (drug.name === "Fervex") {
        this.handleFervex(drug);
      } else if (drug.name !== "Magic Pill") {
        if (drug.benefit > 0) {
          drug.benefit -= 1;
        }
        drug.expiresIn -= 1;
        if (drug.expiresIn < 0 && drug.benefit > 0) {
          drug.benefit -= 1;
        }
      }
    });

    return this.drugs;
  }

  handleHerbalTea(drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0 && drug.benefit < 50) {
      drug.benefit += 1;
    }
  }

  handleFervex(drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
      if (drug.expiresIn < 11) {
        drug.benefit = Math.min(drug.benefit + 1, 50);
      }
      if (drug.expiresIn < 6) {
        drug.benefit = Math.min(drug.benefit + 1, 50);
      }
    }
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    }
  }
}
