import { Injectable } from "@angular/core";
import { Contact } from "./contact.model";

@Injectable()
export class ContactService {

    id: number=0;
    users: Contact[]=[];

    getAll(): Contact[] {
        return this.users;
    }

    getById(id: number): Contact {
        return this.users.find(x=>x.id==id);
    }

    update(user: Contact) {
        let toUpdate=this.getById(user.id);
        Object.assign(toUpdate, user);
    }

    create(user: Contact) {
        user.id=this.counter();
        this.users.push(user);
    }

    delete(user: Contact) {
        let toDelete=this.getById(user.id);
        this.users.splice(this.users.indexOf(toDelete),1);
    }

    counter() {
        return this.id++;
    }
}