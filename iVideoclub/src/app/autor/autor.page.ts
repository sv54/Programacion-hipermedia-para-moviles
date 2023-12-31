import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-autor',
    templateUrl: './autor.page.html',
    styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {
    autor: {
        name: string,
        email: string,
        twitter: string,
        phone: string
    };

    constructor() { 
        this.autor = {name: "Serhii", email: "serhii@gmail.com", twitter: "@noTengo", phone: "642 555 555"}
    }



    ngOnInit() {
        console.log('pagina autor cargada');
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter autor page');
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter autor page');
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave autor page');

    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave autor page');

    }

    ngOnDestroy() {
        console.log('ngOnDestroy autor page');
    }
}
