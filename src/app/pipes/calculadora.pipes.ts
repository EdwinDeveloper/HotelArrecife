import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name:'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    transform(value:any,value2:any){
        let operaciones=`
            suma: ${value+value2} -
            resta: ${value-value2} -
            multiplicacion: ${value*value2} -
            division: ${value/value2}
        `;
        return operaciones;
    }
}