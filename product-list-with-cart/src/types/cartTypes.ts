import {Dessert} from "@/types/dessertTypes.ts";

export interface CartItem {
    dessert: Dessert;
    quantity: number;
}
