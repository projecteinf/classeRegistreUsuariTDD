import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const apiURL="https://cataas.com/api/";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {

  constructor(private http:HttpClient) {}
  ngOnInit() {
    let endPoint:string="cats";
    this.http.get(apiURL+endPoint).subscribe(data => {
      console.log(data);
    } )
  }
}
