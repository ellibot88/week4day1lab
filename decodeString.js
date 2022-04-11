const decodeString = string =>{
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const num = parseInt(string[0]) 
    const newArr = []
    for(let i = 1; i<string.length;i++){
        let position = alphabet.indexOf(string[i])
        let letter = alphabet[position+num]

        newArr.push(letter)

    }
    return newArr.join('')
}

console.log(decodeString('2fcjjm'))