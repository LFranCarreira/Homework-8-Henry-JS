'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  
  if(array.length<=1){return array}
  let pivot=Math.floor(array.length/2);
  let left=[];
  let right=[];

  for(let i=0;i<array.length;i++){
    if(i!==pivot){
      if(array[i]<=array[pivot]){
        left.push(array[i])
      } else {right.push(array[i])}
    }
  }
  return quickSort(left).concat(array[pivot]).concat(quickSort(right))
}
console.log(quickSort([5, 1, 4, 2, 8]))//.toEqual([1, 2, 4, 5, 8])



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1){return array}
  let numMedio=Math.floor(array.length/2)
  let left=array.slice(0,numMedio)
  let right=array.slice(numMedio)
  return merge(mergeSort(left) , mergeSort(right))
  //okey probemos ahora
}
console.log(mergeSort([5, 1, 4, 2, 8]))//.toEqual([1, 2, 4, 5, 8]);
function merge(left,right){
  let result=[];
  let leftInd=0;
  let rightInd=0;
  while(leftInd<left.length && rightInd<right.length){
    if(left[leftInd]<right[rightInd]){
      result.push(left[leftInd]);
      leftInd++
    }else {
      result.push(right[rightInd]);
      rightInd++
    }
  }return result
  .concat(left.slice(leftInd))
  .concat(right.slice(rightInd))
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};