import { Component, OnInit } from '@angular/core';
import { UccService } from './ucc.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ucc',
  templateUrl: './ucc.page.html',
  styleUrls: ['./ucc.page.scss'],
})
export class UccPage implements OnInit {
  isLoading = false;
  constructor(
    private uccService: UccService,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }

  onUcc() {
    this.isLoading = true;
    this.uccService.login();
    this.loadingCtrl.create({ keyboardClose:true, message: 'Logging in...'}).then(
      loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/workouts');
        }, 1500);
      });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
