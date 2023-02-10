interface Geo {
    lat: string;
    lng: string;
}

 interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

 interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

 export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

type CustomAdd = Pick<User, "address">


interface Pagination<T> {
    entities: Array<T>,
    page: number
}



export type UsersPagination = Pagination<User>