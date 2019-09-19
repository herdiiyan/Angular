import { BookService } from "./../book.service";
import { Component, OnInit } from "@angular/core";
import { Book } from "./../book";
import { Observable } from "rxjs";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.css"]
})
export class BooksListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookServise: BookService) {}

  public isCollapsed = false;

  ngOnInit() {
    this.reloadBook();
  }

  Refresh() {
    this.reloadBook();
  }

  reloadBook() {
    this.bookServise.getBookList().subscribe(data => {
      console.log(data);
      this.books = data["data"];
    });
  }
}
