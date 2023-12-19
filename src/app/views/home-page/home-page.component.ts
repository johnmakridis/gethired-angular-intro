import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface GithubRepository {
  id: number;
  name: string;
  owner: {
    id: number;
    login: string; // username
  }
  language: string;
}


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public repositories: GithubRepository[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.getRepos();
  }

  // 1. HTTP REQUEST @ GITHUB
  getRepos(): void {

    this.http.get('https://api.github.com/users/johnmakridis/repos')
      .toPromise()
      .then((data: any) => {

        console.log(data);

        // 2. CREATE A LIST OF REPOS
        this.repositories = data;

      })
      .catch((error) => {
        console.log(error);
      });

  }



  testFunction(repo: GithubRepository): void {

    console.log(repo);

  }



  // 3. DISPLAY REPOS IN HOME PAGE





}
