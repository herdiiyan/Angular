import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksListComponent } from "./books-list/books-list.component";
import { CreateBookComponent } from "./create-book/create-book.component";

const routes: Routes = [
  { path: "", redirectTo: "book", pathMatch: "full" },
  { path: "book", component: BooksListComponent },
  { path: "book/Add", component: CreateBookComponent },
  { path: '**', redirectTo: "book"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
