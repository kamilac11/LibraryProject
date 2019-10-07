import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/books`);
}


  postBooksByCover(cover: String[]): Observable<Book[]>{
    return this.http.post<Book[]>(`http://localhost:8080/books/cover`, cover)
  }


  //tutaj dostajemy odpowiedz z backendu na zapytanie o book o takim coverze
  getBooksByCover(bookCover: string): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/books/cover/${bookCover}`)
  }


  //to powinno dzialac jak to powyzsze
  // getBooksByCover(bookCover: string): Observable<Book[]>{
  //   return this.http.get<Book[]>(`http://localhost:8080/books/cover/` + bookCover)
  // }

}
