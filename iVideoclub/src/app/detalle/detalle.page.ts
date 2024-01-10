import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { PeliculasService } from '../peliculas.service';
import { PeliculasAPIService } from '../peliculas-api.service';


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
    } | undefined


    constructor(private activatedRoute: ActivatedRoute, private peliculasAPIService: PeliculasAPIService, private router: Router) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id != null) {

            if (id !== null) {
                const idInt = parseInt(id, 10);
                if (!isNaN(idInt) && Number.isInteger(idInt) && idInt > 0) {
                    const idInt = parseInt(id, 10)
                    this.peliculasAPIService.getPelicula(String(idInt)).subscribe(
                        result => {
                            this.pelicula = result;
                        },
                        err => {
                            console.log(err);
                        }
                    );
                } else {
                    this.router.navigate(['/home']);
                }
            }

        }


    }
}
