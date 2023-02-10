interface Data {
    id: string; 
    name: string; 
    age: number;
}

interface Service {
    add: (data: Data) => {}
}

export default class HelloController {
    service: Service;
    constructor (ser: Service) {
        this.service = ser
    }

    async add(data: Data){
        this.service.add(data);
    }
}