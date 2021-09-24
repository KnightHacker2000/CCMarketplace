export class Payment {

    constructor(public amount: number,
        public cardNum: string,
        public exp: Date,
        public cvv: string
        ) {}
}
