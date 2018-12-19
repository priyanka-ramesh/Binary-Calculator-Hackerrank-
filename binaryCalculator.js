function btno(){
   console.log("clicked");
    document.getElementById('res').innerHTML += '0';
}
function btnq(){
    document.getElementById('res').innerHTML += '1';
}
function btnsum(){
   
    document.getElementById('res').innerHTML += '+';
}
function btnsub(){
    
    document.getElementById('res').innerHTML += '-';
}
function btnmul(){
     document.getElementById('res').innerHTML += '*';
}
function btndiv(){
     
    document.getElementById('res').innerHTML += '/';
}
function btnc(){
   
    document.getElementById('res').innerHTML = '';
}
function btneq(){
    var expression= document.getElementById('res').innerHTML;
 
var copy = expression;

expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
var numbers = copy.split(/[^0-9\.]+/);
var operators = expression.split("#").filter(function(n){return n});
var result = [];

            for(var i = 0; i < numbers.length; i++){
                 result.push(numbers[i]);
                 if (i < operators.length) result.push(operators[i]);
            }

console.log(result);
var resu;
var a = parseInt( result[0], 2 ) +result[1] +parseInt( result[2], 2 );

resu=eval(a);
            for(var i = 3; i < result.length; i=i+3){
             var b = resu + result[i] +  parseInt( result[i+1], 2 );
             resu =eval(b);
            console.log(resu);
            console.log(result[i] );
            console.log(b);
            }
            console.log(resu.toString(2))
    document.getElementById('res').innerHTML = resu.toString(2);
}