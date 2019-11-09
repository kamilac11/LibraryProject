import { Component, OnInit, Input } from '@angular/core';
import { BookDataComponent } from '../book-data/book-data.component' ;

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  @Input() messageRecive: string;
  

  constructor() { }

  ngOnInit() {
    console.log(this.messageRecive);
  }

}
