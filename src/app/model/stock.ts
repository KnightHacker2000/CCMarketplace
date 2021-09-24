export class Stock {
    favorite: boolean = false;
  
    constructor(public name: string,
                public description: string,
                public code: string,
                public price: number,
                public unit: string,
                public imgsrc: string) {}
  
  }