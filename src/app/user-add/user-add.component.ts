import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  user: Contact={
    id: null,
    name: '',
    nick: '',
    lastName: '',
    sex: true,
    dateOfBirth: '',
    hairColor: '',
    tags: [] 
  };

  constructor( private router : Router, private service: ContactService ) {}
    
  closeModal() {
    this.router.navigate(['']);
  }

  addUser() {
    this.service.create(this.user);
    console.log(this.service.getAll());
    this.closeModal();
  }

}
