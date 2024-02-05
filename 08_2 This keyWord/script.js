'use strict';

let obj = {
    name: 'Aston',
    showName: function () {
        let arr = ()=> {
            console.log(this.name)
        }
        arr();
    }
}
let arr2 = () => {
    console.log(this)
}
arr2();
obj.showName();