import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.page.html',
    styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
    listaTrabajos: { fecha: string, desc: string }[];
    constructor() { 
        this.listaTrabajos= [
            {fecha: "2015-2019", desc: "Estudiando"}, 
            {fecha: "2019-2023", desc: "Estudiando grado"}, 
            {fecha: "2023-2024", desc: "Sigo estudiando :("}]
    }

    ngOnInit() {
        console.log('pagina curriculum cargada');
    }

    // ionViewDidEnter() {
    //     console.log('ionViewDidEnter curriculum page');
    // }

    // ionViewWillEnter() {
    //     console.log('ionViewWillEnter curriculum page');
    // }

    // ionViewWillLeave() {
    //     console.log('ionViewWillLeave curriculum page');

    // }

    // ionViewDidLeave() {
    //     console.log('ionViewDidLeave curriculum page');

    // }

    // ngOnDestroy() {
    //     console.log('ngOnDestroy curriculum page');
    // }

}
