import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'custom-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CUSTOMFORMComponent {
games = ['League of Legends', 'Valorant', 'Team Fight Tactics'];
form!: FormGroup;

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    username:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
    email:['', [Validators.required, Validators.pattern]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
    gender: ['', Validators.required],
    game: ['', Validators.required],
    comments: ['', Validators.required],
    playtime: ['', Validators.required],
  });
}

onSubmit(){
  if (this.form.invalid){
    this.form.markAllAsTouched();
  } else{
    console.log(this.form.value);
  }
}
isInvalid(name: string){
  const control = this.form.get(name);
  return control?.touched && control?.invalid;
}
}
