function getHashTags(headline) {
    //Creation of the "top 3" List and splitting the sentence into a list of words(strings)
    let longestHeadlineWords = []
    const words = headline.split(' ')
    for(let i=0; i<words.length; i++){
        //Clearing of any non-alphabetical characters per word
        clearedWord = words[i].replace(/\W+/g, "")
        //Population of the list up to 3 elements as required for the "top 3"
        if(longestHeadlineWords.length < 3){
            longestHeadlineWords.push("#"+clearedWord);
        }else{
            //The following two if blocks will sort the initial list according to size
            if(longestHeadlineWords[0].length < longestHeadlineWords[1].length){
                let temp = longestHeadlineWords[0]
                longestHeadlineWords.splice(0,1)
                longestHeadlineWords.splice(1,0,temp)
            }
            if(longestHeadlineWords[1].length < longestHeadlineWords[2].length){
                let temp = longestHeadlineWords[1]
                longestHeadlineWords.splice(1,1)
                longestHeadlineWords.splice(2,0,temp)
            }
            //An if-elseif-elseif block to add the element to its' proper position according to size
            if(clearedWord.length+1 > longestHeadlineWords[0].length){
                longestHeadlineWords.unshift('#'+clearedWord)
                longestHeadlineWords.pop()
            }else if(clearedWord.length+1 > longestHeadlineWords[1].length){
                longestHeadlineWords.splice(1,0,'#'+clearedWord)
                longestHeadlineWords.pop()
            }else if(clearedWord.length+1 > longestHeadlineWords[2].length){
                longestHeadlineWords.splice(2,0,'#'+clearedWord)
                longestHeadlineWords.pop()
            }
        }
    }
    return longestHeadlineWords;

}
