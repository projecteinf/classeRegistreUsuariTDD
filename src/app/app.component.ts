import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./components/user/sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'regUsuari';
}
