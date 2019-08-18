import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UccGuard } from './ucc/ucc.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth/auth.module#AuthPageModule' },
  { path: 'ucc', loadChildren: './ucc/ucc.module#UccPageModule' },
  { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsPageModule', },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'schedules', loadChildren: './schedules/schedules.module#SchedulesPageModule' },
  { path: 'forgetpass', loadChildren: './forgetpass/forgetpass.module#ForgetpassPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  // { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
  { path: 'detail', loadChildren: './services/detail/detail.module#DetailPageModule' },
  { path: 'schedule-details', loadChildren: './schedules/schedule-details/schedule-details.module#ScheduleDetailsPageModule' },
  { path: 'workout-detail', loadChildren: './workouts/workout-detail/workout-detail.module#WorkoutDetailPageModule' },
  { path: 'services-main', loadChildren: './services-main/services-main.module#ServicesMainPageModule' },
  { path: 'services-uniform', loadChildren: './services-uniform/services-uniform.module#ServicesUniformPageModule' },
  { path: 'services-shoe', loadChildren: './services-shoe/services-shoe.module#ServicesShoePageModule' },
  { path: 'detail2', loadChildren: './services/detail2/detail2.module#Detail2PageModule' },
  { path: 'detail3', loadChildren: './detail3/detail3.module#Detail3PageModule' },
  { path: 'detail3', loadChildren: './services/detail3/detail3.module#Detail3PageModule' },
  { path: 'detail4', loadChildren: './services/detail4/detail4.module#Detail4PageModule' },
  { path: 'detail5', loadChildren: './services/detail5/detail5.module#Detail5PageModule' },
  { path: 'detail6', loadChildren: './services/detail6/detail6.module#Detail6PageModule' },
  { path: 'detail7', loadChildren: './services/detail7/detail7.module#Detail7PageModule' },
  { path: 'dertail11', loadChildren: './services-uniform/dertail11/dertail11.module#Dertail11PageModule' },
  { path: 'detail13', loadChildren: './services-uniform/detail13/detail13.module#Detail13PageModule' },
  { path: 'detail14', loadChildren: './services-uniform/detail14/detail14.module#Detail14PageModule' },
  { path: 'detail21', loadChildren: './services-shoe/detail21/detail21.module#Detail21PageModule' },
  { path: 'detail22', loadChildren: './services-shoe/detail22/detail22.module#Detail22PageModule' },
  { path: 'services-detail23', loadChildren: './services-detail23/services-detail23.module#ServicesDetail23PageModule' },
  { path: 'detail24', loadChildren: './services-shoe/detail24/detail24.module#Detail24PageModule' },
  { path: 'detail25', loadChildren: './services-shoe/detail25/detail25.module#Detail25PageModule' },
  { path: 'detail26', loadChildren: './services-shoe/detail26/detail26.module#Detail26PageModule' },
  { path: 'detail16', loadChildren: './services-uniform/detail16/detail16.module#Detail16PageModule' },
  { path: 'detail15', loadChildren: './services-uniform/detail15/detail15.module#Detail15PageModule' },
  { path: 'detail17', loadChildren: './services-uniform/detail17/detail17.module#Detail17PageModule' },

  {
    path: 'services',
    children: [
      {
        path: '',
        loadChildren: './services/services.module#ServicesPageModule'
        
      },
      { path: 'services-uniform', loadChildren: './services-uniform/services-uniform.module#ServicesUniformPageModule' },
      { path: 'services-shoe', loadChildren: './services-shoe/services-shoe.module#ServicesShoePageModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
