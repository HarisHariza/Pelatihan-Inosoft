function input(input){
    let nilai = document.getElementById("screen").innerHTML;
    if ((nilai == '0') && (input == '.' || input == ' + ' || input == ' - ' || input == ' * ' || input == ' / ')) {
        nilai = nilai + input;
    }
    else if(nilai != '0') {
        nilai = nilai + input;
    }
    else {
        nilai = input;
    }
    if ((nilai[nilai.length-5] == '+' || nilai[nilai.length-5] == '-' || nilai[nilai.length-5] == '*' || nilai[nilai.length-5] == '/') && 
    (input == ' + ' || input == ' - ' || input == ' * ' || input == ' / ') ){
        nilai = nilai.substr(0, nilai.length-5);
        nilai = nilai + input;
    }
    n = nilai.substr(0, nilai.length-3);
    if ((input == ' + ' || input == ' - ' || input == ' * ' || input == ' / ') && (n.includes(' + ') || n.includes(' - ') || n.includes(' * ') || n.includes(' / '))){
        n = eval(n);
        nilai = n + input;
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
    if(nilai.includes(" + ") == true ){
        n2 = nilai.split(" + ");
        nilai2 = (-1)*n2[n2.length-1];
        nilai = n2.slice(0,-1) + " + " + nilai2;
    }
    else if(nilai.includes(" - ") == true ){
        n2 = nilai.split(" - ");
        nilai2 = (-1)*n2[n2.length-1];
        nilai = n2.slice(0,-1) + " - " + nilai2;
    }
    else if(nilai.includes(" * ") == true ){
        n2 = nilai.split(" * ");
        nilai2 = (-1)*n2[n2.length-1];
        nilai = n2.slice(0,-1) + " * " + nilai2;
    }
    else if(nilai.includes(" / ") == true ){
        n2 = nilai.split(" / ");
        nilai2 = (-1)*n2[n2.length-1];
        nilai = n2.slice(0,-1) + " / " + nilai2;
    }
    else
    {
        nilai = (-1)*nilai;
    }
    document.getElementById("screen").innerHTML = nilai;
}
function percentage(){
    nilai = document.getElementById("screen").innerHTML;
    if(nilai.includes(" + ") == true ){
        n2 = nilai.split(" + ");
        nilai2 = n2[n2.length-1]/100;
        nilai = n2.slice(0,-1) + " + " + nilai2;
    }
    else if(nilai.includes(" * ") == true ){
        n2 = nilai.split(" * ");
        nilai2 = n2[n2.length-1]/100;
        nilai = n2.slice(0,-1) + " * " + nilai2;
    }
    else if(nilai.includes(" / ") == true ){
        n2 = nilai.split(" / ");
        nilai2 = n2[n2.length-1]/100;
        nilai = n2.slice(0,-1) + " / " + nilai2;
    }
    else if(nilai.includes(" - ") == true ){
        n2 = nilai.split(" - ");
        nilai2 = n2[n2.length-1]/100;
        nilai = n2.slice(0,-1) + " - " + nilai2;
    }
    else
    {

        nilai = nilai/100;
    }
    document.getElementById("screen").innerHTML = nilai;
}
