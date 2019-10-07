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
  bookDataTest: Book[] = new Array();
  tekst: string = "notebook.png"

  ngOnInit() {
    this.bookService.getBooks().subscribe(value => {
      this.bookData = value;
      console.log(value);

     // this.bookList.push(this.getNameTest());
    })

    //show books 
      this.bookService.getBooksByCover("notebook.png").subscribe(val2 => {this.bookData=val2;
        console.log(val2);
      });
}



  

//lbl to obiekt np label, z kolei val to wartosc - name obiektu ktora zostala mu dana, parametr lbl musi byc bo inacej nie poda nazwy tylko id
  getNameChosenPicture(lbl, val){
    //document.getElementById(lbl).innerHTML = val;
    //console.log(val); //zwraca nazwe przycisku ktory zostal klikniety
    if(this.bookList.indexOf(val)===-1){
      this.bookList.push(val)
      
    }
    // console.log(this.bookList.toString());
    this.bookService.postBooksByCover(this.bookList); 
    return this.bookList.toString();
    //console.log(this.bookList)
  }

  
  //get list of choosen labels after click submit button
  testClick(){
     console.log(this.bookList);
    return this.bookList.toString();
   
    
  }



}
