import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from '../../../classes/user';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
    MatSelectModule,
    ReactiveFormsModule
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

  languages: Language[] = [
    {value: 'catala', viewValue: 'Català'},
    {value: 'castella', viewValue: 'Castellà'},
    {value: 'angles', viewValue: 'Anglès'},
  ];

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  save() {
    console.log(this.user.email,this.user.username,this.user.language);
  }

}
