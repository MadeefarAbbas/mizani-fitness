import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.page.html',
  styleUrls: ['./workout-detail.page.scss'],
})
export class WorkoutDetailPage implements OnInit {
  className: string;
  calendarOneWeek: Date;
  alterationService: boolean;
  shoeBag: boolean;
  houseStaff: boolean;
  uniform: boolean;
  onlyHouseStaff: boolean;

  date: Date = new Date();
  month = ((this.date.getUTCMonth() + 1) > 9 ? '' : '0') + (this.date.getUTCMonth() + 1); //months from 1-12
  day = (this.date.getUTCDate() > 9 ? '' : '0') + this.date.getUTCDate();
  year = this.date.getUTCFullYear();
  newdate = this.month + "-" + this.day + "-" + this.year;

  myMonth = ((this.date.getUTCMonth() + 1) > 9 ? '' : '0') + (this.date.getUTCMonth() + 1); //months from 1-12
  myDay = (this.date.getUTCDate() > 9 ? '' : '0') + this.date.getUTCDate();
  myYear = this.date.getUTCFullYear();

  myDate: any = this.month + "." + this.day + "." + this.year;


  constructor(private modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {}

  updateCucumber() {
    console.log('Cucumbers new state:' + this.alterationService);
    if(this.alterationService || this.shoeBag) {
      this.uniform = true;
    } else {
      this.uniform = false;
    }

    if(this.houseStaff && (this.alterationService || this.shoeBag)) {
      this.uniform = false;
      this.onlyHouseStaff = false;
    } else {
      // this.uniform = false;
      // this.onlyHouseStaff = false;
    }

    if(this.houseStaff && !this.alterationService && !this.shoeBag) {
      this.onlyHouseStaff = true;
    } else {
      this.onlyHouseStaff = false;
    }
  }
  onCancel() {
    this.modalCtrl.dismiss();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'You have been Booked successfully!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  

}
