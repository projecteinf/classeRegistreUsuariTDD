import { Component, OnInit } from '@angular/core';
import { Api } from '../../../services/api';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {

  constructor(private api:Api ) {}

  ngOnInit() {
    const itemsp=25;
      this.api.getCats(itemsp).subscribe( data => {
        console.log(data);
      });
  } 
  
}
