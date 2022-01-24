function DETECTION_TYPE_ETIQUETTE(ETIQUETTE){
    // VERIFIER LE TYPE D'ETIQUETTE
    
    var LIST_ETIQUETTE = []; //CREER UNE LISTE AVEC LE CODE ARTICLE EN POSTION 0 ET LE NUMERO DE SERIE 1
    switch (ETIQUETTE.length) {
        case 23:
        // 000000000111115323237XX
        console.log("DETECTION ETIQUETTE CB");
        LIST_ETIQUETTE.push(ETIQUETTE.substr(15,6)); //CODE ARTICLE
        LIST_ETIQUETTE.push(ETIQUETTE.substr(9,5)); //SN
        break;
            
        case 30:
         // DTRD000182433-U-00006633-20/43
         console.log("DETECTION ETIQUETTE QR");
        LIST_ETIQUETTE.push(ETIQUETTE.substr(7,6)); //CODE ARTICLE
        LIST_ETIQUETTE.push(ETIQUETTE.substr(19,5)); //NUMERO DE SERIE 
        break;

        case 32:
        // DTR2000049064 - U - 00269 - 2138
        console.log("DETECTION ETIQUETTE DTR 2");
        LIST_ETIQUETTE.push(ETIQUETTE.substr(7,6)); //CODE ARTICLE      
        LIST_ETIQUETTE.push(ETIQUETTE.substr(20,6)); //NUMERO DE SERIE      
        break;    
    }
        
    return LIST_ETIQUETTE;

}
