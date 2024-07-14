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
      if (drug.name !== "Magic Pill") {
        this.updateExpiration(drug);
      }

      if (drug.name === "Herbal Tea") {
        this.handleHerbalTea(drug);
      } else if (drug.name === "Fervex") {
        this.handleFervex(drug);
      } else if (drug.name !== "Magic Pill") {
        drug.expiresIn < 0
          ? this.updateBenefit(drug, -2)
          : this.updateBenefit(drug, -1);
      }
    });

    return this.drugs;
  }

  handleHerbalTea(drug) {
    drug.expiresIn < 0
      ? this.updateBenefit(drug, 2)
      : this.updateBenefit(drug, 1);
  }

  handleFervex(drug) {
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    } else if (drug.expiresIn < 6) {
      this.updateBenefit(drug, 3);
    } else if (drug.expiresIn < 11) {
      this.updateBenefit(drug, 2);
    } else {
      this.updateBenefit(drug, 1);
    }
  }

  updateBenefit(drug, change) {
    drug.benefit = Math.min(Math.max(drug.benefit + change, 0), 50);
  }

  updateExpiration(drug) {
    drug.expiresIn -= 1;
  }
}
