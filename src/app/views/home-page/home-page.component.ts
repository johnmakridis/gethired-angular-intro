import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter } from 'lodash';

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



  async ngOnInit(): Promise<void> {

    // Synchronous
    // this.functionA();
    // this.functionB();


    // Async call syntax 1
    // this.functionAasync()
    //   .then((data) => {  // RESOLVE
    //     console.log(data);
    //   })
    //   .catch((error) => { // REJECT
    //       // ...
    //   });


    // Async call syntax 2
    // try {

    //   const githubRepositoriesResponse = await this.functionAasync();
    //   this.repositories = githubRepositoriesResponse;

    // } catch (error) {

    //   console.log(error);

    // }





    try {

      const promises: [Promise<GithubRepository[]>, Promise<GithubRepository[]>] = [
        this.functionAasync(),
        this.functionBasync()
      ];

      const [reposUserA, reposUserB] = await Promise.all(promises);

      this.repositories = ([]).concat(reposUserA).concat(reposUserB);
      this.repositories = filter(this.repositories, (repo: GithubRepository) => repo.language === 'TypeScript');


      // Call to our node-backend
      // const putResponse = await this.http.put('http://localhost:3000/users', null).toPromise();
      // console.log(putResponse);


    } catch (error) {

      console.log(error);

    }








  }



  async functionAasync(): Promise<GithubRepository[]> {

    return new Promise((resolve, reject) => {

      this.http.get('https://api.github.com/users/johnmakridis/repos')
        .toPromise()
        .then((data: any) => {

          setTimeout(() => {

            const response: GithubRepository[] = data;

            return resolve(response);

          }, 1000);

        })
        .catch((error) => {

          return reject(error);

        });


    })

  }



  async functionBasync(): Promise<GithubRepository[]> {

    return new Promise((resolve, reject) => {

      this.http.get('https://api.github.com/users/angular/repos')
        .toPromise()
        .then((data: any) => {

          setTimeout(() => {

            const response: GithubRepository[] = data;

            return resolve(response);

          }, 3000);

        })
        .catch((error) => {

          return reject(error);

        });


    })

  }



  functionA(): void {

    console.log('functionA');

  }


  functionB(): void {

    console.log('functionB');

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
