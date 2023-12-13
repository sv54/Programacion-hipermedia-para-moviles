import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit(){
    console.log('pagina home cargada');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter home page');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter home page');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave home page');

  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave home page');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy home page');
  }
}
