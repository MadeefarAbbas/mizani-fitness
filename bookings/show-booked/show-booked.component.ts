import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-booked',
  templateUrl: './show-booked.component.html',
  styleUrls: ['./show-booked.component.scss'],
})
export class ShowBookedComponent implements OnInit {
  date: Date = new Date();
  month = ((this.date.getUTCMonth() + 1) > 9 ? '' : '0') + (this.date.getUTCMonth() + 1); //months from 1-12
  day = (this.date.getUTCDate() > 9 ? '' : '0') + this.date.getUTCDate();
  year = this.date.getUTCFullYear();
  newdate = this.month + "-" + this.day + "-" + this.year;

  myMonth = ((this.date.getUTCMonth() + 1) > 9 ? '' : '0') + (this.date.getUTCMonth() + 1); //months from 1-12
  myDay = (this.date.getUTCDate() > 9 ? '' : '0') + this.date.getUTCDate();
  myYear = this.date.getUTCFullYear();

  myDate: any = this.month + "." + this.day + "." + this.year;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  onCancel() {
    this.modalCtrl.dismiss();
  }

}
