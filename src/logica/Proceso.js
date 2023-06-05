import calcularKval from "./helpers/calcularKval"

class Proceso {
  constructor(nombre, tamanio, tiempo){
    this.nombre = nombre
    this.tamanio = tamanio
    this.tiempo = tiempo
  }

  getKval(){
    return calcularKval(this.tamanio)
  }
}

export default Proceso