import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  actualPage = 1;
  @Output() changePage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  get firstNumber() {
    return this.actualPage === 1 ? 1 : this.actualPage - 1;
  }

  get secondNumber() {
    return this.actualPage === 1 ? 2 : this.actualPage;
  }

  get thirdNumber() {
    return this.secondNumber + 1;
  }

  stepPage(page) {
    this.actualPage = page;
    this.changePage.emit(this.actualPage);
  }
}
