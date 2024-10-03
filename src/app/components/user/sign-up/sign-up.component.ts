import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../classes/user';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule, 
    MatSlideToggleModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user:User = new User();
  repeatPassword!:string;

  getLanguages():string[] {
    return ["frances","angles","italia","catala","castella","gallec"].sort();
  }

  isDisabled():boolean {
    return !this.user.isValid(this.repeatPassword);
  }

  languages: Food[] = [
    {value: 'catala', viewValue: 'Català'},
    {value: 'castella', viewValue: 'Castellà'},
    {value: 'angles', viewValue: 'Anglès'},
  ];

  

  save() {
    console.log(this.user.email,this.user.username,this.user.language);
  }

}
