function add(){
    return function(){ console.log('Child function') };
}

const child = add();
child();

add()();