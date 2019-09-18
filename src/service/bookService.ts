import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';



@Injectable()
export class BookService {

    constructor(private http: HttpClient){}

    getBook(): Observable<Book[]>{
        return this.http.get<Book[]>('http://localhost:8080/books');
    }
    

}