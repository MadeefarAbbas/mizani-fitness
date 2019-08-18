import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  constructor(
    private menu: MenuController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  onOpenMenu() {
    this.menu.toggle();
  }
}
