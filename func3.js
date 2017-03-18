const aFunc = function (){
    console.log('Het 1 giay');
}

// setTimeout(aFunc, 5000);

// setTimeout(console.log, 5000);

function add(a, b, callback) {
    setTimeout(function(){
        if(typeof a != 'number' || typeof b != 'number') {
            callback('Tham so phai co kieu number');
        } else {
            callback(undefined, a + b);
        }
    }, 3000);
}

add(4, '5', function(err, total){
    if(err) return console.log(err);
    console.log('Ket qua:', total);
});