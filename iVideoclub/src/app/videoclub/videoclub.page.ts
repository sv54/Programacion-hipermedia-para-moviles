import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { PeliculasService } from '../peliculas.service';
import { PeliculasAPIService } from '../peliculas-api.service';

@Component({
    selector: 'app-videoclub',
    templateUrl: './videoclub.page.html',
    styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

    modoLista = true

    listaPeliculas: any[] = []
    constructor(private router: Router, private peliculasAPIService: PeliculasAPIService) {
        //this.listaPeliculas = peliculasServicio.getPeliculas()
        peliculasAPIService.getPeliculas().subscribe(
            result => {
                this.listaPeliculas = result;
            },
            err => {
                console.log(err);
            }
        );
    }



    verPaginaDetalle(id: Number): void {
        this.router.navigate(['/detalle', id]);
    }

    cambiarVista() {
        this.modoLista = !this.modoLista
    }


    ngOnInit() {
        console.log('pagina videoclub cargada');
    }

    // ionViewDidEnter() {
    //     console.log('ionViewDidEnter videoclub page');
    // }

    // ionViewWillEnter() {
    //     console.log('ionViewWillEnter videoclub page');
    // }


    // ionViewWillLeave() {
    //     console.log('ionViewWillLeave videoclub page');

    // }

    // ionViewDidLeave() {
    //     console.log('ionViewDidLeave videoclub page');

    // }

    // ngOnDestroy() {
    //     console.log('ngOnDestroy videoclub page');
    // }
}
