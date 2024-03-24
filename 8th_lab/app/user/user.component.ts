import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  apiUrl = 'https://randomuser.me/api/?nat=IN';
  userData: User | null = null;
  constructor(private http: HttpClient) {
    this.fetchUser();
  }
  fetchUser() {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        this.userData = response.results[0];
        console.log(this.userData);
      },
      error: (err) => {
        console.log('error fetching user', err);
      }
    })
  }
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.userData);
  }
}

