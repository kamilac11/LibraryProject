import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { MatTableDataSource } from '@angular/material';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  constructor(private bookService: BookService) { }

  displayedColumns: string[] = ['book.id', 'book.title', 'book.author', 'book.year'];

  //dataSource = bookService.
  //books = new MatTableDataSourceource();
  bookTest: Book[] = new Array();

  ngOnInit() {
    this.bookService.getBooks().subscribe(value => {
      this.bookTest = value;
      console.log(value);
    })
    

  }

}
