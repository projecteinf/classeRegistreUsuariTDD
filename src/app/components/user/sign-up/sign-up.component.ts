import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
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

  

  save() {
    console.log(this.user.email,this.user.username,this.user.language);
  }

}
