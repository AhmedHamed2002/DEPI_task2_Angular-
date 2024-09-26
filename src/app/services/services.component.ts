import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  By:any ;

  constructor(private _DataSevice:DataService)
  {
    this.By =  this._DataSevice.student;
  }
}
