import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {

  constructor() { }

  ngOnInit(){
    console.log('pagina curriculum cargada');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter curriculum page');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter curriculum page');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave curriculum page');

  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave curriculum page');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy curriculum page');
  }

}
