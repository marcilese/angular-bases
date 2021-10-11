import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
    titulo: string = 'ROUND ';
    numero: number = 3;
    cartas: number = 6;
    round: number = 1;



    
    sumarRestar(valor: number) {
        this.numero += valor;
    }

    sumarRestarCartas(valor: number) {
        this.cartas += valor;
    }

    sumarRound(valor: number) { 
        this.round += valor;

        if(this.round === 0) {
                    this.round += 1;
                }
        this.sumarRestar(2);
        this.sumarRestarCartas(3);
    }

    resetear() {
        this.cartas = 6;
        this.numero = 3;
        this.round = 1;
    }

    

}