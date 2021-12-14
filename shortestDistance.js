var shortestDistance = function(wordsDict, word1, word2) {
    //[practice, makes, perfect, coding, makes] coding, practice =3
    //[practice, makes, perfect, coding, makes] makes, coding =1
    //loop through wordsDict
    let word1Ind = [];
    let word2Ind = [];
    for (let i=0; i<wordsDict.length; i++){
    //find index number of word 1 n 2
        if (wordsDict[i] == word1){
            word1Ind.push(i);
        }
        if (wordsDict[i] == word2){
            word2Ind.push(i);
        }
    }
    let distance = 10;
    for (i=0; i<word1Ind.lenght; i++){
        for (j=0; j<word2Ind.length; j++){
            minDistance = 
        }
    }
    return minDistance;
};
console.logshortestDistance(["practice", "makes", "perfect", "coding", "makes"],"coding","practice")
