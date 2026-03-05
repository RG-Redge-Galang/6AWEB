import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";
  books: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => {
      this.books = data;
    });
  }

  addBook() {
    const formData = new FormData();
    formData.append("title", (<HTMLInputElement>document.getElementById("newBook")).value);
    formData.append("description", (<HTMLInputElement>document.getElementById("newDesc")).value);
    formData.append("price", (<HTMLInputElement>document.getElementById("newPrice")).value);
    formData.append("genre", (<HTMLInputElement>document.getElementById("newGenre")).value);
    formData.append("isSeries", (<HTMLInputElement>document.getElementById("newSeries")).value);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }


editBook(id: any) {
  const newTitle = window.prompt("Enter new Title:");
  if (newTitle === null) return;

  const newDesc = window.prompt("Enter new Description:");
  const newGenre = window.prompt("Enter new Genre:");
  const newPrice = window.prompt("Enter new Price:");
  const newSeries = window.prompt("Is it a series? (true/false):");
  const formData = new FormData();
  formData.append("title", newTitle);
  formData.append("description", newDesc || "");
  formData.append("genre", newGenre || "");
  formData.append("price", newPrice || "0");
  formData.append("isSeries", newSeries || "false");

  this.http.put(this.APIUrl + 'EditBook?id=' + id, formData).subscribe({
    next: (res) => {
      alert("Book Updated!");
      this.refreshBooks();
    },
    error: (err) => console.error("Update failed", err)
  });
}

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }

}
