//desafio 3

//Replanteando el desafio del simulador, mantengo la pagina de alq de habitaciones, pero en esta entrega todo el feedback va al adm de la pagina.
//Partiendo del supuesto de una semana de Operaciones. entregamos los siguientes datos:
//Subtotal con referencia de ID por habitacion incluyendo dias alquilados, monto parcial, comision parcial. 
//Total Acumulado de: nro de dias, monto facturado, comisiones percibidas.

// creo objeto habitaciones
class room{
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    roomPrice(){
        return this.price; 
    }
}

//agrego habitaciones disponibles
const rooms1 = new room('1','Charleroi',50);
const rooms2 = new room('2','Namur',55);
const rooms3 = new room('3','Nivelles',45);
const rooms4 = new room('4','Moron',70);
const rooms5 = new room('5','Luven',75);
const rooms6 = new room('6','Artwerpen',60);

//Creo objeto nro de dias

class detalleNroDias{
    constructor(room,nroDias){
        this.room = room;
        this.nroDias = nroDias;
    }
    //funcion para guardar dato
    cantidadDias(){
        return this.nroDias;
    }
    //funcion calcular $xQ
    calcularSubtotal(){
        let subtotal = this.room.price * this.nroDias;
        return subtotal;
    }
    //funcion calcular taxes 10%
    calcularTax(){
        const taxBase = 0.10;
        let tax = this.calcularSubtotal() * taxBase;
        return tax;
    }
    mostrarDetalle(){
        return 'Detalle por Operacion:\n'+'\nRoom ID: '+ this.room.id + '\nNro de dias alq: ' + this.nroDias + ' x  $ '+ this.room.roomPrice()+ ' = '+ this.calcularSubtotal()+'-Euros' + '\nTaxes: ' + ' $ '+this.calcularTax()+'-Euros'+'\n';
    }
}

//agrego numero de dias + objeto room
const detalleNroDias1 = new detalleNroDias(rooms1,3)
const detalleNroDias2 = new detalleNroDias(rooms2,5)
const detalleNroDias3 = new detalleNroDias(rooms3,2)
const detalleNroDias4 = new detalleNroDias(rooms4,6)
const detalleNroDias5 = new detalleNroDias(rooms5,1)
const detalleNroDias6 = new detalleNroDias(rooms6,7)


//Objeto acumulados totales
class acumTotal{
    constructor(fecha,detalleFinal){
        this.fecha = fecha;
        this.detalleFinal = detalleFinal;
    }
    //Calculo total de dias alquilados
    calcularDaysTotal(){
        let total = 0;
        for(const dT of this.detalleFinal){
            total += dT.cantidadDias();
        }
        return total
    }
    //Calculo total de ingreso por alquiler
    calcularAmountTotal(){
        let total = 0;
        for(const aT of this.detalleFinal){
            total += aT.calcularSubtotal();
        }
        return total
    }
    //Calculo total de comision acum
    calcularTaxTotal(){
        let total = 0;
        for(const cT of this.detalleFinal){
            total += cT.calcularTax();
        }
        return total
    }
    //muestro total concatenando
    mostrarTotal(){
        let text = '';
        for(const bT of this.detalleFinal){
            text += bT.mostrarDetalle() + '\n';
        }
        text += 'Resumen de Acumulado Semanal: '+ this.fecha +'\nTotal de dias Alquilados: ' + this.calcularDaysTotal()+' dias.' +'\nIngresos Totales por alquiler: $ '+ this.calcularAmountTotal()+'-Euros' +'\nTotal de Comisiones: $ '+ this.calcularTaxTotal()+'-Euros';
        return text
    }
}
// creo un lista con los atrib acumulados
const listaRooms = [];
listaRooms.push(detalleNroDias1)
listaRooms.push(detalleNroDias2)
listaRooms.push(detalleNroDias3)
listaRooms.push(detalleNroDias4)
listaRooms.push(detalleNroDias5)
listaRooms.push(detalleNroDias6)

//cargo nuevo acum
const acumTotal1 = new acumTotal(new Date(),listaRooms)
console.log(acumTotal1.mostrarTotal())


//-----------------------------------/
