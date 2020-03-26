import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading:any;
  currentImage: any = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574680648702&di=fca0575eb6166780a5eb04233f00087b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201508%2F02%2F20150802171450_RBsSC.thumb.700_0.jpeg";

  constructor(
    public camera: Camera,
    public router: Router
  ) { }

  ngOnInit() {

  }


  onClick() {
    // this.router.navigate(['/detail', this.currentImage ]);
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      this.router.navigate(['/detail', this.currentImage ]);
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
