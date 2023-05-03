import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';

const routes: Routes = [
  {
    path: '' , component: ScreenOneComponent
  },
  {
    path: 'selectbanks' , component: ScreenOneComponent
  },
  {
    path: 'linkbanks' , component: ScreenTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
