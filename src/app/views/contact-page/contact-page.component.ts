import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactFormData } from '../../types';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  contact = new ContactFormData();

  ngOnInit(): void {

  }

}
