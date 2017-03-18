const aFunc = function (){
    console.log('Het 1 giay');
}

// setTimeout(aFunc, 5000);

// setTimeout(console.log, 5000);

function add(a, b, callback) {
    setTimeout(function(){
        callback(a + b);
    }, 3000);
}

add(4, 5, function(total){
    console.log(total);
});