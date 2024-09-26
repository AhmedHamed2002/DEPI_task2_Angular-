import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  student:object ={
    name : "Ahmed" ,
    date:"25 / 9 / 2024"
  }
  constructor() {
  }
}
