import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  By:any ;

  constructor(private _DataSevice:DataService)
  {
    this.By =  this._DataSevice.student;
  }
}
