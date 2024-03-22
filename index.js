function calculation(val) {
 document.getElementById("result").value += val;
}

function clearResult() {
 document.getElementById("result").value = '';
}

function deleteLast() {
 var value = document.getElementById("result").value;
 document.getElementById("result").value = value.substr(0, value.length - 1);
}

function equal() {
 var result = document.getElementById("result").value;
 if (result) {
     document.getElementById("result").value = eval(result);
 }
}