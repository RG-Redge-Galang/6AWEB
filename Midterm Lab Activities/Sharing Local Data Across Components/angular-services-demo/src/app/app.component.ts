import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { EmployeeService } from './employee.service'
import { ProductsService } from './products.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MyserviceService]
})
export class AppComponent {
  title = 'angular-services-demo';
    public employees: {
    id: number,
    firstname: string,
    lastname:string,
    email: string,
  }[] = [];
    public products:{
    productid: string,
    productname: string,
    description: string,
    price: string,
    }[] = []
  constructor(
       private _employeeService:EmployeeService,
       private _productService:ProductsService
  ){}
  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }

}
