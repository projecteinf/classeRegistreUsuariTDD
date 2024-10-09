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
  errorMessage!:String;
  private _isError:boolean=false;

  constructor(private api:Api ) {}

  ngOnInit() {
    const itemsp=25;
    this.api.getCats(itemsp).subscribe( {
      next: (data) => {
        this.isError=false;
        console.log(data);
      },
      error: (err) => {
        this.isError=true;
        this.errorMessage="Error en la connexió amb l'API. Contacti amb l'administrador";
      }
    });
  }

  get isError() { return this._isError; }
  set isError(error:boolean) { this._isError=error; }
}
