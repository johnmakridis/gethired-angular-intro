import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-intro-new';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        if (!this.route.snapshot.fragment)
          window.scrollTo(0, 0);

      }

    });

  }

}
