// Utiliser la fonction en lui précisant via des listes a valeur a vérifier , la tolérance & le symbole a vérifier

// Liste symbole correspond a l'état a vérifier exemple 1 > 0
// La fonction renvoie une liste de résultat

// exemple d'utilisation 
// var LISTE_VALEURS = [-2,7,8];
// var LISTE_TOLERANCES = [2,6,[9,1]];
// var LISTE_SYMBOLE = ["<",">","><"];

// console.log(TOLERANCE_CHECK(LISTE_VALEURS,LISTE_TOLERANCES,LISTE_SYMBOLE));

// exemple pour exploiter les donnés 
/*CONTROLER_VALEUR(){
    console.log(this.id);
    var val_input = GI(this.id); //valeur de l'input a controler
    console.log(val_input);
    var PTA = FIND_TO_ARRAY(this.id);
    console.log(LISTE_INPUT[PTA]);
        // Si la liste comporte une tolérance inférieur ou égal
        var verifiertol;
        console.log(LISTE_INPUT[PTA].length);
        if(LISTE_INPUT[PTA].length == 2){
            console.log(val_input);
            verifiertol = TOLERANCE_CHECK([val_input],[LISTE_INPUT[PTA][0]],[LISTE_INPUT[PTA][1]]);
        }
        // Sinon la valeur sera comprise entre
        else{
            var liste_tol = [LISTE_INPUT[PTA][0],LISTE_INPUT[PTA][1]];
            console.log(liste_tol);
            // verifiertol = TOLERANCE_CHECK([val_input],['0','3'],["><"]);
            verifiertol = TOLERANCE_CHECK([val_input],liste_tol,[LISTE_INPUT[PTA][2]]);
        }
        console.log(verifiertol);
        if(verifiertol == "HT"){
        console.log("j'écris en rouge");
            document.getElementById(this.id).style.border = "0.25rem #FF1717 solid ";
        }
        else{
        console.log("j'écris en noir");
            document.getElementById(this.id).style.border = "2px black solid";
        }
    
    // VALEUR,TOLERANCE,SYMBOLE
    
}*/


function TOLERANCE_CHECK(LISTE_VALEURS,LISTE_TOLERANCES,LISTE_SYMBOLE){
LISTE_RESULT_CHECK = [];
for (let i = 0; i < LISTE_SYMBOLE.length; i++) {
    // Doit être supérieur a 
    if(LISTE_SYMBOLE[i] == ">"){
        if (LISTE_VALEURS[i] > LISTE_TOLERANCES[i]){
        LISTE_RESULT_CHECK.push("BON");}
        else{
        LISTE_RESULT_CHECK.push("HT");}
    }
    // Doit être inférieur a 
    if(LISTE_SYMBOLE[i] == "<"){
        if (LISTE_VALEURS[i] < LISTE_TOLERANCES[i]){
        LISTE_RESULT_CHECK.push("BON");}
        else{
        LISTE_RESULT_CHECK.push("HT");}
    }
    // Doit être supérieur ou égal a 
    if(LISTE_SYMBOLE[i] == ">="){
        if (LISTE_VALEURS[i] >= LISTE_TOLERANCES[i]){
        LISTE_RESULT_CHECK.push("BON");}
        else{
        LISTE_RESULT_CHECK.push("HT");}
    }
    // Doit être inférieur ou égal a 
    if(LISTE_SYMBOLE[i] == "<="){
        if (LISTE_VALEURS[i] <= LISTE_TOLERANCES[i]){
        LISTE_RESULT_CHECK.push("BON");}
        else{
        LISTE_RESULT_CHECK.push("HT");}
    }
    console.log(LISTE_SYMBOLE[i]);
    if(LISTE_SYMBOLE[i] == "><"){
        console.log(LISTE_VALEURS[i]);
        console.log(LISTE_TOLERANCES[1]);
        console.log(LISTE_TOLERANCES[0]);
        if (LISTE_VALEURS[i] > LISTE_TOLERANCES[0] && LISTE_VALEURS[i] < LISTE_TOLERANCES[1]){
            
        LISTE_RESULT_CHECK.push("BON");}
        else{
        LISTE_RESULT_CHECK.push("HT");}
    } 

    if(LISTE_SYMBOLE[i] == "=="){
        if (LISTE_VALEURS[i] == LISTE_TOLERANCES[i]){
            LISTE_RESULT_CHECK.push("BON");}
            else{
            LISTE_RESULT_CHECK.push("HT");}
        }
}
return LISTE_RESULT_CHECK;
}
