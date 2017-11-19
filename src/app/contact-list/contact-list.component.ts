import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { Router } from '@angular/router';
import { TagService } from '../shared/tag.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  tags: string[];
  users: Contact[];
  param: string;
  options: any = {
    copy: true
  };
  
  constructor(private service: ContactService, private serviceTags: TagService, private router: Router, private dragulaService: DragulaService) {

  }

  ngOnInit() {
    this.users=this.service.getAll();
    this.tags=this.serviceTags.getAll();

        // this.dragulaService.dropModel.subscribe((value) => {

    //   this.onDropModel(value.slice(1));
    // });
    // this.dragulaService.removeModel.subscribe((value) => {

    //   this.onRemoveModel(value.slice(1));
    // });
  }

  ngAfterViewInit() {
   
  }

  onDropModel(args) {
    let [el, target, source] = args;
    // let tagContent=el.innerText;
    // let targetUser=target.children[0].innerText;
    
    // //this.service.addTag(targetUser, tagContent);
    
     console.log(this.users);

  }

  onRemoveModel(args) {
    let [el, source] = args;

  }
  onEdit(user: Contact) {
    this.router.navigate(['users','edit', user.id]);
  }

  addUser() {
    this.router.navigate([{outlets: { modal: 'add'} }]);
  }

  removeUser(user) {
    this.service.delete(user);
  }

  updateUserList(param: string){
    this.users=this.service.getAll();
    this.param=param;
  }

  addTag() {
    this.router.navigate([{outlets: { modal: 'addTag'} }]);
  }
  
}
