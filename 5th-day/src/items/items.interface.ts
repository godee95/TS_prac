import { Item } from "./item.interface";

// 아이템들을 합치기 위한 인터페이스 생성
export interface Items {
    [key: number]: Item;
}

//   1: { id: 1, name: "item1", price: 100, description: "This is item1", image: "item1.jpg" },
//   2: { id: 2, name: "item2", price: 200, description: "This is item2", image: "item2.jpg" },
//   3: { id: 3, name: "item3", price: 300, description: "This is item3", image: "item3.jpg" },