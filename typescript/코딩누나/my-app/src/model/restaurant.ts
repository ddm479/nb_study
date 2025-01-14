// 보통 model 폴더를 만들어서 여기에 type을 정리한다

// let data = {
//     name: '누나네 식당',
//     category: 'western',
//     address: {
//         city: 'busan',
//         detail: 'somewhere',
//         zipCode: 23425634
//     },
//     menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }, { name: "garlic steak", price: 3000, category: "GARLIC STEAK" }]
// }

// 객체타입 정의하는 방식에는 type방식과 interface 방식이 있다.
// 1. type방식
export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[] // menu: Array<Menu> 와 같다
}

// 1-1. Restaurant 타입에서 category만 선택한 타입
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
    // dong?:number; // -> ?는 optional을 의미  
}

// 1-2. Address 타입에서 zipCode를 뺀 타입
export type AddressWithoutZip = Omit<Address, 'zipCode'>

export type Menu = {
    name: string;
    price: number;
    category: string;
}

// api response 타입예시,   <T> -> 제네릭: 동적으로 타입부여      
export type ApiResponse<T> = {
    data:T[];
    totalPage:number;
    page:number
}

export type RestaurantResponse = ApiResponse<Restaurant> // Restaurant 타입
export type MenuResponse = ApiResponse<Menu> // Menu 타입 