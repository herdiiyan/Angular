import { BookService } from "./../book.service";
import { Book } from "./../book";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-book",
  templateUrl: "./create-book.component.html",
  styleUrls: ["./create-book.component.css"]
})
export class CreateBookComponent implements OnInit {
  book: Book = new Book();
  submitted = false;
  constructor(private route: Router, private bookService: BookService) {}

  ngOnInit() {
    this.bookService.refreshNeeded$.subscribe(() => {});
  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService.createBook(this.book).subscribe(data => {
      this.submitted = true;
      alert("Success");
    });
  }

  // save() {
  //   this.bookService.createBook(this.book).subscribe(data => {
  //     var response = data["responseStatus"];
  //     if ((response["responseCode"] = "00")) {
  //       this.submitted = true;
  //       alert(response.responseDesc);
  //     } else {
  //       alert(response.responseDesc);
  //     }
  //   });
  // }

  refresh() {
    this.submitted = false;
  }
}
