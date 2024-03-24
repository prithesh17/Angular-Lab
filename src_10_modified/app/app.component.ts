import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'example';
  data: any;
  newData: { name: string, age: string } = { name: '', age: '' };

  url = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.url)
      .subscribe({
        next: response => {
          this.data = response;
        }
      })
  }

  putData(name: string, age: string) {
    this.newData.name = name;
    this.newData.age = age;
    this.http.put<any>(this.url, this.newData)
      .subscribe({
        next: response => {
          this.data = response;
        }
      });
  }
}