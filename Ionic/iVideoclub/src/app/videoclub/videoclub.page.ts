import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

    constructor(private router: Router) {}

    verPaginaDetalle(id: Number): void {
        this.router.navigate(['/detalle', id]);
    }


  ngOnInit(){
    console.log('pagina videoclub cargada');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter videoclub page');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter videoclub page');
  }


  ionViewWillLeave(){
    console.log('ionViewWillLeave videoclub page');

  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave videoclub page');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy videoclub page');
  }
}
