import { Routes } from '@angular/router';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { RegisterComponent } from './register/register.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { CUSTOMFORMComponent } from './custom-form/custom-form.component';
export const routes: Routes = [
  {path: '',component: ReactiveDemoComponent},
  {path: 'app-reactive-demo',component: ReactiveDemoComponent},
  {path: 'app-template-demo',component: TemplateDemoComponent},
  {path: 'custom-demo',component:CUSTOMFORMComponent},
  {path: 'app-register',component:RegisterComponent},
  {path: 'app-challenge', component:ChallengeComponent}
];
