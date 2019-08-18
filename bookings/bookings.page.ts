import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ShowBookedComponent } from './show-booked/show-booked.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  buttonActive: boolean = true;
  
  buttonNotActive1: boolean = false;
  buttonNotActive2: boolean = false;
  buttonNotActive3: boolean = false;

  className: string;
  calendarOneWeek: Date;
  alterationService: boolean;
  shoeBag: boolean;
  houseStaff: boolean;
  uniform: boolean;
  onlyHouseStaff: boolean;
  values: any;
  five: boolean = true;
  b: boolean = true;
  elevenToFif: boolean = true;
  sixToTwe: boolean = true;  
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
  data: any = null;
  ngOnInit() {}

  change($event) {
    let value = $event.detail.value;
    // if($event == '5') {
    //   this.data = null;
    //   alert($event); 
    // }
    if( value <= 5) {
      this.five = false;
      
      this.b = true;
      
      this.elevenToFif = true;
      this.sixToTwe = true;
      console.log('five');
    }
    else if(value >= 6 && value <= 10) {
      this.five = true;
      this.b = false;
      
      this.elevenToFif = true;
      this.sixToTwe = true;
      console.log('b');
    }
    else if(value >= 11 && value <= 15) {
      this.five = true;
      this.b = true;
      this.elevenToFif = false;
      this.sixToTwe = true;
      console.log('b');
    }
    else if(value >= 16 && value <= 20) {
      this.b = true;
      this.elevenToFif = true;
      this.five = true;
      this.sixToTwe = false;
      console.log('b');
    }
  }
  updateCucumber() {
    console.log('Cucumbers new state:' + this.alterationService);
    if(this.alterationService || this.shoeBag) {
      this.uniform = true;
    } else {
      this.uniform = false;
    }

    // if(this.houseStaff && (this.alterationService || this.shoeBag)) {
    //   this.uniform = false;
    //   this.onlyHouseStaff = false;
    // } else {
    //   // this.uniform = false;
    //   // this.onlyHouseStaff = false;
    // }

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
      message: 'Are you sure you want to book successfull?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
            this.modalCtrl.dismiss();
            this.modalCtrl.create({component: ShowBookedComponent})
            .then(modalEl => {
              modalEl.present();
              return modalEl.onDidDismiss();
            })
            .then(resultData => {
              console.log(resultData.data, resultData.role);
            })
          }
        }
      ]
    });

    await alert.present();
  }
  

  async availableTimeSelect1() {
    this.buttonNotActive1 = true;
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to book this time slot?',
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
  async availableTimeSelect2() {
    this.buttonNotActive2 = true;
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to book this time slot?',
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
  async availableTimeSelect3() {
    this.buttonNotActive3 = true;
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to book this time slot?',
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


  async notAvailableTimeSelect() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'This time slot is not available!!',
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
  // event handler with the default event parameter
  withDefaultEvent(event: any) {
    // this.isLoading = true;
    console.log(event.valueText); 
    // prints the event object and the mobiscroll calendar control instance
    this.newdate = event.valueText.split('/').join('-');
    // this.scheduleService.date = this.newdate;
    this.myDate = event.valueText.split('/').join('.');

  }


  totalRange(event) {

  }
}
