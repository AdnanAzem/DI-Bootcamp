
let result = '';
for(let i = 0; i < 6; i++){
    result += '*';
    console.log(result);
}

for(let i = 0; i < 6; i++){
    result = '';
    for(let j = 0; j <= i; j++){
        result += '*'   
    }
    console.log(result);
}