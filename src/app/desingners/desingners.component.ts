import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-desingners',
  standalone: true,
  imports: [],
  templateUrl: './desingners.component.html',
  styleUrl: './desingners.component.css'
})
export class DesingnersComponent {
  By:any ;

  constructor(private _DataSevice:DataService)
  {
    this.By =  this._DataSevice.student;
  }
}
