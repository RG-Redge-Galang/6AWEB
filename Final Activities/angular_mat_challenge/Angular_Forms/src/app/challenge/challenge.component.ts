import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule, MatSlideToggleModule, MatSelectModule, FormsModule
  ],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  isDarkMode = false;
  submitted = false;
  favoriteColors: string[] = ['Charmander', 'Bulbasaur', 'Squirtle'];


  displayData = { userName: '', email: '', gender: '', birthDate: null, color: '' };

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl(null, [Validators.required]),
    subscribe: new FormControl(false),
    favoriteColor: new FormControl('', [Validators.required]),
    birthDate: new FormControl<any>('', [Validators.required, this.dateOfBirthValidator.bind(this)])
  });

  dateOfBirthValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) return null;
    const year = new Date(control.value).getFullYear();
    return year > 2006 ? { invalidYear: true } : null;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.formdata.valid) {
      this.displayData = { ...this.formdata.value };
      console.log("Submitted:", this.displayData);
    }
  }
}
