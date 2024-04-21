class MyArray {
  constructor() {
    this.value = new Array(0);
  }

  addItemAtBeginning(item) {
    const arr = new Array(this.value.length + 1);
    arr[0] = item;
    for (let i = 0; i < this.value.length; i++) {
      arr[i + 1] = this.value[i];
    }
    this.value = arr;
  }
}

const myarr = new MyArray();
myarr.addItemAtBeginning("a");

console.log(myarr);
