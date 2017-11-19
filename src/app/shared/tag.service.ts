import { Injectable } from "@angular/core";

@Injectable()
export class TagService {

    tags:string[]=[
        'музыкант',
        'работа',
        'художник'
    ]

    getAll():string[]{
        return this.tags;
    }

    addTag(tag: string) {
        this.tags.push(tag);
    }
}