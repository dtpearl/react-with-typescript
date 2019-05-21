function find<T>(arr: T[], testFunc: (arrItem: T) => boolean): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      return arr[i];
    }
  }
}

console.log(find(['A', 'B'], item => item === 'A'));

// Turning this file into a module, so our
// declarations won't go into the global scope.
export default find;
