import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";


@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    
    transform(users, param='up') {
        if (param==='up') {
            return users.sort((user, userNext)=>{
                if (userNext.nick>user.nick) {
                    return -1;
                } else if (userNext.nick<user.nick) {
                    return 1;
                }
            })
        }
        if (param==='down') {
            return users.sort((user, userNext)=>{
                if (userNext.nick>user.nick) {
                    return 1;
                } else if (userNext.nick<user.nick) {
                    return -1;
                }
            })
        }
    }

}