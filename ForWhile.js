let zvezd = '' ;
let zvezdo = '' ;
/*
for(let i = 10; i >= 0; i--) {
    
    for(let j = 0;j < i ;j++ ){
    zvezd += '*';
    }
    zvezd += "\n"
    
}
console.log(zvezd)*/
/*
for(let h = 0; h <= 10; h++) {
    
    for(let g = 0;g < h ;g++ ){
    zvezdo += '*';
    }
    zvezdo += "\n"
    
}
console.log(zvezdo)*/
/*
for(let h = 0; h <= 10; h++) {
    for(let i = 1;i >= h ;i-- ){
        zvezdo += ' ';
        
        }
        zvezdo += "\n"
    
    for(let g = 0;g <= h ;g++ ){
    zvezdo += '*';
    }
    zvezdo += "\n"
    
}
console.log(zvezdo)
*/

/*
let i = 0;
let str = "";
let num = 10;

while(i < 10){
    let i1 = 0;
    while(i1 < 10) {
        if (i1 < num) {
            str += " " ;    
        }
        else {
            str += "*";
        }
        i1++;
    }
    num--;
    str += "\n";
    i++;
};
console.log(str);
*/

let i = 0;
let str = "";
let num = 10;
let num1 = 5;
let num2 = 5;

while(i < 10){
    let i1 = 0;
    while(i1 < 10) {
        if (i1 <= num1 || i1 <= num2) {
            str += " " ;    
        }
        else {
            str += "*";
        }
        i1++;
    }
    num1++;
    num2++;
    str +=" "
    num--;
    str += "\n";
    i++;
};
console.log(str);
