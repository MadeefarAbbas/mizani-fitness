import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BookingsPage } from './bookings.page';
import { ShowBookedComponent } from './show-booked/show-booked.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsPage
  }
];

@NgModule({
  imports: [  
    CommonModule,
    MbscModule, // add the mobiscroll module
    FormsModule, // add the forms module
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingsPage,ShowBookedComponent],
  entryComponents: [ShowBookedComponent]
})
export class BookingsPageModule {}
