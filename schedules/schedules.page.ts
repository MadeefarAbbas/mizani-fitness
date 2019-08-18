import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})
export class SchedulesPage implements OnInit {

  constructor(private menu: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  onOpenMenu() {
    this.menu.toggle();
  }

  onClick() {
    this.modalCtrl.create({component: ScheduleDetailComponent})
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
    })
  }
}
