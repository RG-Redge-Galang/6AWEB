import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
studentName = 'Redge Raphael Galang';
score = 95;

imageUrl = 'https://hau.instructure.com/files/11382962/download?download_frd=1&verifier=Qr4loj6BQnVBzeTBJmu4to2iPOroJc59K33fIYEa';
isDisabled = true;

colSpanValue = 3;

isPassing = true;

boxColor = "purple";
boxSize = '150px';
}
