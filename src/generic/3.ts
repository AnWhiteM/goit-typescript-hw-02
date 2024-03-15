/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T>(objA: T, objB: T): T {
  const mergedObject = Object.assign({}, objA, objB);
  return mergedObject as T;
}


export {}