import HelloRepositor from "@/repositors/firebase/HelloRepositor";
import { StringLiteral } from "typescript";

interface Data {
    id: string; 
    name: string; 
    age: number;
}

interface repositors {
    add: (data: Data) => {}
}

export default class HelloService {
    repository: repositors;

    constructor(rep: repositors){
        this.repository = rep
    }

    async add (data: Data ) {
        
        data.id = 'val' + data?.id;
        this.repository.add(data)
    }

}