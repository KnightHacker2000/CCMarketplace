import { Item } from './item';

export class Order {
    public itemArr: Array<Item> = [];

    constructor() {}

    public createItemArr(itemArr: Array<Item>){
        this.itemArr = itemArr;
    }

}
