function input(input){
    let nilai = document.getElementById("screen").innerHTML;
    if ((nilai == '0') && (input == '.' || input == '+' || input == '-' || input == '*' || input == '/')) {
        nilai = nilai + input;
    }
    else if(nilai != '0') {
        nilai = nilai + input;
    }
    else {
        nilai = input;
    }
    if ((nilai[nilai.length-2] == '+' || nilai[nilai.length-2] == '-' || nilai[nilai.length-2] == '*' || nilai[nilai.length-2] == '/') && 
    (input == '+' || input == '-' || input == '*' || input == '/') ){
        nilai = nilai.substr(0, nilai.length-2);
        nilai = nilai + input;
    }
    document.getElementById("screen").innerHTML = nilai;
}
function hasil(){
    let nilai = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = eval(nilai);
}
function AC(){
    document.getElementById("screen").innerHTML = "";   
}
function C(){
    nilai = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = nilai.substr(0, nilai.length - 1);
}
function negatif(){
    nilai = document.getElementById("screen").innerHTML;
    nilai = (-1)*nilai;
    document.getElementById("screen").innerHTML = nilai;
}
function percentage(){
    nilai = document.getElementById("screen").innerHTML;
    nilai = nilai / 100;
    document.getElementById("screen").innerHTML = nilai;
}