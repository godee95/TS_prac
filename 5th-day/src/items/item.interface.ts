// BaseItem -> 아이템을 수정, 등록할 때 사용
export interface BaseItem {
    name: string;
    price: number;
    description: string;
    image: string;
}

// Item -> 특정한 값을 검색하거나 삭제할때 사용
export interface Item extends BaseItem {
    id: number;
}