import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PeliculasService } from '../peliculas.service';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

    listaPeliculas: any[]
    constructor(private router: Router, private peliculasServicio: PeliculasService) {
        this.listaPeliculas = peliculasServicio.getPeliculas()
    }

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
