function repeatString(string, num) {
    if (num < 0) { 
        return "ERROR" 
    }
    
    let final = "";

    for (let i = 0; i < num; i++) {
        final += string;
    }
   
    console.log(final)
}

repeatString("hey", 4) // returns 'heyheyheyhey'