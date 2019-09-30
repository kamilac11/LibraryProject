import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { MatTableDataSource, getMatIconNameNotFoundError } from '@angular/material';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  constructor(private bookService: BookService) { }

  clickedColumn: string;
  number: number;
  bookList: Array<string> = [];


  displayedColumns: string[] = ['book.id', 'book.title', 'book.author', 'book.year'];

  //dataSource = bookService.
  //books = new MatTableDataSourceource();
  bookData: Book[] = new Array();

  ngOnInit() {
    this.bookService.getBooks().subscribe(value => {
      this.bookData = value;
      console.log(value);
     // this.bookList.push(this.getNameTest());
    })

  }


  getNameTest(lbl, val){
    //document.getElementById(lbl).innerHTML = val;
    //console.log(val); //zwraca nazwe przycisku ktory zostal klikniety
    if(this.bookList.indexOf(val)===-1){
      this.bookList.push(val)
      
    }
    console.log(this.bookList)
    this.bookService.postBooksByCover(this.bookList);
    return this.bookList;
    //console.log(this.bookList)
  }

  
  //zwraca liste wybranych ikon 
  testClick(){
    console.log(this.bookList);
  }

  
  // onClickTest(){
  //   this.number=1;
  //   console.log(this.number);
  // }

  // onClick1(){
  //   this.clickedColumn = "lecture.png";
  //   console.log(this.clickedColumn);
  // }

  // onClick2(){
  //   this.clickedColumn = "lecture.png";
  //   console.log(this.clickedColumn);
  // }



  // getName(){
  //  document.getElementById()
  //   console.log(this.value);
  // }

}
