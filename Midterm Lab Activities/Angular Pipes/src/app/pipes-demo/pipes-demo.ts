import { Component, OnInit} from '@angular/core';
import { DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, TitleCasePipe, PercentPipe, KeyValuePipe, I18nPluralPipe } from '@angular/common';
import { interval, Observable, map ,} from 'rxjs';
@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,AsyncPipe,CurrencyPipe,SlicePipe,DecimalPipe,TitleCasePipe,PercentPipe,I18nPluralPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit{
   presentDate = new Date();

   time$ = interval(1000).pipe(map(() => new Date()));
   price : number =20000; ngOnInit(){}
   fruits = ["Apple", "Orange", "Grape", "Mango", "Kiwi", "Pomegranate"];
   decimalNum1: number = 8.7589623;
   decimalNum2: number = 5.43;
   text: string = 'angular pipes demo';
   percentNum1: number = 0.875
   userData: Record<string, any> = { name: 'Redge', age: 20, country: 'Philippines' };
   clients: number = 2;
   clientMap: { [k: string]: string } = {
      '=0': 'Zero clients waiting...',
      '=1': 'One client waiting...',
      'other': '# clients waiting...'
    };
  }

