import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent {
roles = ['Admin', 'User', 'Guest'];
departments = ['Human Resources','Information Technology','Finance and Accounting']

form!: FormGroup;

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    username:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
    email:['', [Validators.required, Validators.pattern]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
    role: ['Admin', Validators.required],
    gender: ['', Validators.required],
    status: ['', Validators.required],
    comments: ['', Validators.required],
    age: ['', Validators.required, Validators.pattern(/^[0-9]{2,3}$/)],
    address: ['', Validators.required],
    department: ['', Validators.required],
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
