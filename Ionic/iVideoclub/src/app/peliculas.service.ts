import { Injectable } from '@angular/core';
import * as moviesData from '../assets/lista_peliculas.json';


@Injectable({
    providedIn: 'root'
})
export class PeliculasService {
    private peliculas: {
        title: string,
        year: string,
        director: string,
        poster: string,
        synopsis: string
    }[];
    constructor() { 
        this.peliculas = (moviesData as any).default;        
    }

    getPeliculas(){
        return this.peliculas   
    }

    getPelicula(id: number): any {
        return this.peliculas[id];
    }
}
