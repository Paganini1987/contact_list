import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {
  user: Contact;

  constructor(private router: Router, private currentRoute: ActivatedRoute, private service: ContactService) { }

  ngOnInit() {
    let id: number=+this.currentRoute.snapshot.paramMap.get("id");
    this.user=this.service.getById(id);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
