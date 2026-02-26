import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTimepickerModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  favoriteColors: string[] = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Purple'
];
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel =10;
  formdata: FormGroup = new FormGroup({
  userName: new FormControl(''),
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  gender: new FormControl(null,[Validators.required]),
  address: new FormControl(''),
  angularSkillLevel: new FormControl(5),
  time: new FormControl(null, [Validators.required]),
  subscribe: new FormControl(false),
  favoriteColor: new FormControl('', [Validators.required])
})
onClickSubmit(data:{
  userName:string;
  email:string;
  password:string;
  gender:string;
  address:string;
  birthDate:Date;
  angularSkillLevel:number;
}){
  this.submitted = true;
  this.userName = data.userName;
  this.email = data.email;
  this.password = data.password;
  this.gender = data.gender;
  this.address = data.address;
  this.angularSkillLevel = data.angularSkillLevel;
  this.birthDate = data.birthDate;
  if(this.formdata.valid){
    console.log("Form Submitted!",this.formdata.value);
  }else{
    console.log('Form is not valid!')
  }
}
}


