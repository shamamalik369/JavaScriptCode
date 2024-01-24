// Count the Vowels present in the String using Functions

function countVowels(s){
    let ct=0;
    for(const c of s){
        if (c==="a"|| c==="e"||c==="i"||c==="o"||c==="u"){
            ct++;
        }
    }
    return ct;
}



const Countvow=(s)=>{
    let ct=0;
    for(const c of s){
        if (c==="a"|| c==="e"||c==="i"||c==="o"||c==="u"){
            ct++;
        }
    }
    return ct;

}