export class Payment {

    constructor(public amount: number,
        public cardNum: string,
        public exp: string,
        public cvv: string,
        public name: string
        ) {}
}
