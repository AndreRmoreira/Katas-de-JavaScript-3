const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

function kata1(){
    let mensagem1 = []

    for(let cont1 = 1 ; cont1 <= 25 ; cont1++){
        mensagem1.push(cont1)
    }

    return mensagem1
}

function kata2(){
    let mensagem2 = []

    for(let cont2 = 25 ; cont2 > 0 ; cont2--){
        mensagem2.push(cont2)
    }

    return mensagem2
}

function kata3(){
    let mensagem3 = []

    for(let cont3 = -1 ; cont3 >= -25 ; cont3--){
        mensagem3.push(cont3)
    }

    return mensagem3
}

function kata4(){
    let mensagem4 = []

    for(let cont4 = -25 ; cont4 <= -1 ; cont4++){
        mensagem4.push(cont4)
    }

    return mensagem4
}

function kata5(){
    let mensagem5 = []

    for(let cont5 = 25 ; cont5 >= -25 ; cont5--){
    if(cont5 % 2 !== 0)
    mensagem5.push(cont5)
    }

    return mensagem5
}

function kata6(){
    let mensagem6 = []

    for(let cont6 = 3 ; cont6 <= 100 ; cont6++){
        if(cont6 % 3 == 0)
        mensagem6.push(cont6)
    }

    return mensagem6
}

function kata7(){
    let mensagem7 = []

    for(let cont7 = 7 ; cont7 <= 100 ; cont7++){
        if(cont7 % 7 == 0)
        mensagem7.push(cont7)
    }

    return mensagem7
}

function kata8(){
    let mensagem8 = []

    for(let cont8 = 100 ; cont8 >= 3 ; cont8--){
        if(cont8 % 3 == 0 || cont8 % 7 == 0)
        mensagem8.push(cont8)
    }

    return mensagem8
}

function kata9(){
    let mensagem9 = []

    for(let cont9 = 5 ; cont9 <= 100 ; cont9++){
        if(cont9 % 5 == 0 && cont9 % 2 == 1 )
        mensagem9.push(cont9)
    }

    return mensagem9
}

function kata10(array){
      
    return array
}
console.log(kata10 (sampleArray))

function kata11(sampleArray){
    let mensagem11 = []
    

    for(let cont11 = 0 ; cont11 < sampleArray.length ; cont11++){
        if(sampleArray[cont11] % 2 == 0)
            mensagem11.push(sampleArray[cont11])
    }

   return mensagem11
}

function kata12(sampleArray){
    let mensagem12 = []

    for(let cont12 = 0 ; cont12 < sampleArray.length ; cont12++){
        if(sampleArray[cont12] % 1 == 0)
        mensagem12.push(sampleArray[cont12])
    }
   
    return mensagem12

}

function kata13(sampleArray){
    let mensagem13 = []

    for(let cont13 = 0 ; cont13 < sampleArray.length ; cont13++){
        if(sampleArray[cont13] % 8 == 0)
        mensagem13.push(sampleArray[cont13])
    }  
    
    return mensagem13
}

function kata14(sampleArray){
    let contadora = []

    for(let cont14 = 0 ; cont14 < sampleArray.length ; cont14++){
        contadora.push(sampleArray[cont14] * sampleArray[cont14])
    }

    return contadora
}

function kata15(){
    let mensagem15 = []
    let contadora1 = 0

    for(let cont15 = 1 ; cont15 <= 20 ; cont15++){
        contadora1 = contadora1 + cont15
    }

    return contadora1
}

function kata16(sampleArray){
    let mensagem16 = []
    let contadora2 = 0

    for(let cont16 = 0 ; cont16 < sampleArray.length ; cont16++){
       contadora2 = contadora2 + sampleArray[cont16]
       
    }
    
    return contadora2
}

function kata17(sampleArray){
    let mensagem17 = sampleArray[0]

    for(let cont17 = 0 ; cont17 < sampleArray.length ; cont17++){
        if(mensagem17 > sampleArray[cont17]){
        mensagem17 = sampleArray[cont17]
        }
    }
    
    return mensagem17
}

function kata18(sampleArray){
    let mensagem18 = sampleArray[0]

    for(let cont18 = 0 ; cont18 < sampleArray.length ; cont18++){
        if (mensagem18 < sampleArray[cont18]){
            mensagem18 = sampleArray[cont18]
        }
    }

    return mensagem18
}



