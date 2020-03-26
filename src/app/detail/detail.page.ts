import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  url: any;
  long: any;
  wide: any;
  high: any;
  weight: any;
  loading:any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.url = params.url
    });
  }


  submit(event) {
    this.presentLoadingWithOptions()
    setTimeout(()=>{
      this.loading.dismiss();
      this.router.navigate(['/card', this.url, this.long, this.wide, this.high, this.weight]);
    },2000)
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: null,
      duration: 0,
      message: '请稍等...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }
}
