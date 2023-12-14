import { Component } from '@angular/core';
import { ApplicationFormModalComponent } from '../../components/application-form-modal/application-form-modal.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ApplicationFormModalComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {



  ngOnInit(): void {



  }

}
