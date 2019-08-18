import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';

import { IonicModule } from '@ionic/angular';

import { WorkoutDetailPage } from './workout-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    MbscModule, // add the mobiscroll module
    RouterModule.forChild(routes)
  ],
  declarations: [WorkoutDetailPage]
})
export class WorkoutDetailPageModule {}
