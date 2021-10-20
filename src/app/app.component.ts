import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel';
  mysalt:string = 'assets/images/salt.jpg'
  mysalt1:string = 'assets/images/salt2.jpg'
  mysalt2:string = 'assets/images/salt3.jpg'

  mypha1: string = 'assets/images/pha1.jpg'
  mypha2: string = 'assets/images/pha2.jpg'
  mypha3: string = 'assets/images/pha3.jpg'

  mysdok1: string = 'assets/images/sdok1.jpg'
  mysdok2: string = 'assets/images/sdok2.jpg'
  mysdok3: string = 'assets/images/sdok3.jpg'

  mywatch1: string = 'assets/images/watch1.jpg'
  mywatch2: string = 'assets/images/watch2.jpg'
  mywatch3: string = 'assets/images/watch3.jpg'

  mypangsd1: string = 'assets/images/pangsd1.jpg'
  mypangsd2: string = 'assets/images/pangsd2.jpg'
  mypangsd3: string = 'assets/images/pangsd3.jpg'

  mychao1: string = 'assets/images/chao1.jpg'
  mychao2: string = 'assets/images/chao2.jpg'
  mychao3: string = 'assets/images/chao3.jpg'

  mytab1: string = 'assets/images/tab1.jpg'
  mytab2: string = 'assets/images/tab2.jpg'
  mytab3: string = 'assets/images/tab3.jpg'

  myeto1: string = 'assets/images/eto1.jpeg'
  myeto2: string = 'assets/images/eto3.jpeg'
  myeto3: string = 'assets/images/eto2.jpeg'

  mykaew1: string = 'assets/images/kaew1.jpeg'
  mykaew2: string = 'assets/images/kaew2.png'
  mykaew3: string = 'assets/images/kaew3.jpeg'

  myeam1: string = 'assets/images/e-am.jpeg'
  myeam2: string = 'assets/images/e-am2.jpeg'
  myeam3: string = 'assets/images/e-am3.jpeg'

  myroyal1: string = 'assets/images/royal1.jpeg'
  myroyal2: string = 'assets/images/royal2.jpeg'
  myroyal3: string = 'assets/images/royal3.jpeg'

  mybam1: string = 'assets/images/bam1.jpeg'
  mybam2: string = 'assets/images/bam2.jpeg'
  mybam3: string = 'assets/images/bam3.jpeg'

  mykhun1: string = 'assets/images/khun1.jpeg'
  mykhun2: string = 'assets/images/khun2.jpeg'
  mykhun3: string = 'assets/images/khun3.jpeg'

  mysari1: string = 'assets/images/sari1.jpeg'
  mysari2: string = 'assets/images/sari2.jpeg'
  mysari3: string = 'assets/images/sari3.jpeg'

  mylom1: string = 'assets/images/chong1.jpeg'
  mylom2: string = 'assets/images/chong2.jpeg'
  mylom3: string = 'assets/images/chong3.jpeg'

  wallpaper: string = 'assets/images/gif1.gif'
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  
}

