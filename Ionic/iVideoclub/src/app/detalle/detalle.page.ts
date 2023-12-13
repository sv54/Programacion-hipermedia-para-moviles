import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moviesData from '../../assets/lista_peliculas.json';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

    movies: any[] = (moviesData as any).default;

    pelicula!: {
        title: string;
        year: string;
        director: string;
        poster: string;
        synopsis: string;
    };

    urlImg: String = ""


    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id != null) {
            const idInt = parseInt(id, 10)
            this.pelicula = this.movies[idInt]
            this.urlImg = "assets/posters/" + this.pelicula.poster
            console.log(this.urlImg)
        }

    }

}
