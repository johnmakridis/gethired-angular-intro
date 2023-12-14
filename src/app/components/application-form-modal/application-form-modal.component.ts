import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationFormData } from '../../types';

declare const bootstrap: any;

@Component({
  selector: 'app-application-form-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './application-form-modal.component.html',
  styleUrl: './application-form-modal.component.scss'
})
export class ApplicationFormModalComponent {

  application = new ApplicationFormData();


  ngOnInit(): void {

  }


  submitForm(): void {
    console.log(this.application);

    // process form here

    this.closeModal();

  }



  closeModal(): void {

    const modalElem = document.getElementById('applicationFormModal');

    const modal = bootstrap.Modal.getInstance(modalElem);

    modal.hide();

  }

}
