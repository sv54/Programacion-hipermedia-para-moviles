import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';


@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {


    pelicula: {
        title: string;
        year: string;
        director: string;
        poster: string;
        synopsis: string;
    } | undefined;


    constructor(private activatedRoute: ActivatedRoute, private servicioPeliculas: PeliculasService) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id != null) {
            const idInt = parseInt(id, 10)
            this.pelicula = this.servicioPeliculas.getPelicula(idInt)
        }
        else{
            this.pelicula={
                title: "",
                year: "",
                director: "",
                poster: "",
                synopsis: ""
            }
        }

    }


}
