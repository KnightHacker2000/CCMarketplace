export class Stock {
    favorite: boolean = false;
  
    constructor(public name: string,
                public description: string,
                public code: string,
                public price: number,
                public previousPrice: number,
                public unit: string,) {}
  
    isPositiveChange(): boolean {
      return this.price >= this.previousPrice;
    }
  }