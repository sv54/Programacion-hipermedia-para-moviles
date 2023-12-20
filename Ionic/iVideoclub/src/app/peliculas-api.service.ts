import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeliculasAPIService {
    APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';

    constructor(public http: HttpClient) { 

    }

    getPeliculas(): Observable<any[]>{
        return this.http.get<any[]>(this.APIep);
    }

    getPelicula(id: String): Observable<any> {
        return this.http.get<any>(this.APIep + '/' + id);

    }
}


