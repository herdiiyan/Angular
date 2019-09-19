import { BookService } from "./../book.service";
import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../book";
import { BooksListComponent } from "../books-list/books-list.component";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private bookService: BookService,
    private listComponent: BooksListComponent
  ) {}

  ngOnInit() {}

  updateBook() {
    this.bookService
      .updateBook(this.book.id, {
        judul: this.book.judul,
        penerbit: this.book.penerbit,
        denda: this.book.denda,
        stok: this.book.stok
      })
      .subscribe(data => {
        console.log(data);
        console.log(this.book);

        this.listComponent.reloadBook();
      });
  }

  deleteBook() {
    if (confirm("Sikin ?")) {
      this.bookService.deleteBook(this.book.id).subscribe(data => {
        console.log(data);
        this.listComponent.reloadBook();
      });
    }
  }
}
