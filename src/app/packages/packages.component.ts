import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  By:any ;

  constructor(private _DataSevice:DataService)
  {
    this.By =  this._DataSevice.student;
  }
}
