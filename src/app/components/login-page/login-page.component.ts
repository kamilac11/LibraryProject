import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import {BookService} from 'src/app/service/book.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    bookTest: BookService;
    //console.log(.getBook());
  }

  onClickGo(){
    window.open('http://localhost:4200/book')
  }

}
