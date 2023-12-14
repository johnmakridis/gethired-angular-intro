import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  yearNow = moment().format('YYYY');

}
