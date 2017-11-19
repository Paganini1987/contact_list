import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from '../shared/tag.service';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.css']
})
export class TagAddComponent implements OnInit {

  tag: string='';

  constructor(private router: Router, private TagService: TagService) { }

  ngOnInit() {
  }

  closeModal() {
    this.router.navigate(['']);
  }

  addTag() {
    this.TagService.addTag(this.tag);
    this.closeModal();
  }

}
