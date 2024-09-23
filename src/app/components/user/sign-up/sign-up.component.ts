import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username!:string;
  email!:string;
  language!:string;

  getLanguages():string[] {
    return ["frances","angles","italia","catala","castella"].sort();
  }

  isDisabled():boolean {
    return this.email==="" || this.email === undefined;
  }
  save() {
    console.log(this.email,this.username,this.language);
  }

}
