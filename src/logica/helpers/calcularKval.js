// Esta funcion recibe bytes y retorna la kval a la que mejor se ajusta ej -> 128 = 7
// TODO funciona con valores exatos a exponentes de 2. Corregir a valores que no son exactos
const calcularKval = (bytes) => {
  let flag = bytes
  let contador = 0
  while(flag >= 1){
    flag = flag/2
    contador= contador+1
  }
  return contador
}

export default calcularKval