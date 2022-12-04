import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  inputType!: string;
  textCheckbox!: string;
  unauthorized!: boolean;
  errorMessage!: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn() && this.router.navigateByUrl('/gstock');

    this.inputType = 'password';
    this.textCheckbox = 'Afficher le mot de passe !';
    this.unauthorized = false;
    this.errorMessage = '';

    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onShowPassword(event: any): void {
    if(event.target.checked) {
      this.inputType = 'text';
      this.textCheckbox = 'Ne pas afficher le mot de passe !';
    }
    else {
      this.inputType = 'password';
      this.textCheckbox = 'Afficher le mot de passe !';
    }
  }

  onSubmit(): void {
    this.authService.logIn(this.loginForm.value as AuthModel).subscribe({
      next: response => {
        this.authService.setToken(response.body.access_token);
        this.router.navigateByUrl('/gstock');
      },
      error: response => {
        this.unauthorized = true;
        if(response.status === 401) 
          this.errorMessage = 'Email et/ou mot de passe incorrect !';
        else if(response.status === (406 || 500))
          this.errorMessage = response.error.message;
        else
          this.errorMessage = "Une erreur s'est produit !";
      }
    });
  }
}
