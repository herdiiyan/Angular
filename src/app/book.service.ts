import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BookService {
  private url = "http://localhost:3020/book";
  // private url = "http://localhost:8080/buku/";

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  createBook(book: any): Observable<any> {
    return this.http.post(this.url, book).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  getBookList(): Observable<any> {
    return this.http.get(this.url);
  }

  updateBook(id: number, value: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
