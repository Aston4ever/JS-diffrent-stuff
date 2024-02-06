'use strict';

const aston = {
    firstName: "Aston",
    year: 1989,
    calcage: function () {
        /*
        -----Solution 1-----
        console.log(this);
        const This = this; //Мы берем контекст отсюда и помещаем внутрь другой функции
        console.log(2037 - this.year);
        const isMilleniaL = function (){
            console.log(This.year >= 1981 && This.year <= 1996) // при this получим undefined потому что функция вне объекта, как будто написана отдельно, по этому используем контекст из верхней функции
        }
        isMilleniaL();
        */
        console.log(this);

        console.log(2037 - this.year);
        const isMilleniaL =  ()=> {
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMilleniaL();
    },

    greet: ()=> console.log(`Hey ${this.firstName}`),
}

aston.greet();