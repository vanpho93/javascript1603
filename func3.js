const aFunc = function (){
    console.log('Het 1 giay');
}

// setTimeout(aFunc, 5000);

// setTimeout(console.log, 5000);

let c;

function add(a, b) {
    setTimeout(function(){
        c = a + b;
    }, 3000);
}

add(4, 5);

setTimeout(function(){
    console.log(c);
}, 4000);