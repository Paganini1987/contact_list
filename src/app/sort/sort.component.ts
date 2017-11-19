import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output() onSort=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addParam(e) {
    if (e.target.tagName==="LI") {
      this.onSort.emit(e.target.dataset.sort);
    }
  }
}
 