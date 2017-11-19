import { Injectable } from "@angular/core";
import { Contact } from "./contact.model";

@Injectable()
export class ContactService {

    id: number=1;
    users: Contact[]=[
        {id: 0, name: 'Иван', nick: 'ivan', lastName: 'Петров', sex: true, dateOfBirth: '13.12.2000', hairColor: 'ref', tags: ['велосипед', 'стрельба']}
    ]

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