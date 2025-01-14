interface Add{
    (num1:number, num2:number): number; // (인자값)과 파라미터 type
}

const add : Add = function(x,y){
    return x+y;
}

add(10,20);

interface IsAdult{
    (age:number):boolean;
}

const ex: IsAdult = (age) => {
    return age > 19;
}

ex(33);