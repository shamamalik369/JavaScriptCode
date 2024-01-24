function countVowels(s){
    let ct=0;
    for(const c of s){
        if (c==="a"|| c==="e"||c==="i"||c==="o"||c==="u"){
            ct++;
        }
    }
    return ct;
}
