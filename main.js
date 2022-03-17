console.log('tableau-style')


var table = document.getElementById('tableau-style');
var items = document.getElementById('quantity').value
var value = parseInt(items[0])

function plus() {

    value++
    console.log(value);

    var output = document.getElementById('quantity');
    output.innerHTML = value;
}
function minus() {



}

