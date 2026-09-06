/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for (let ch in s){
        const str = s.charAt(ch);
        if(str !== "*"){
            stack.push(str);
        }
        else if(str === "*"){
            stack.pop()
        }
    }
    console.log(stack)
    console.log(stack.reverse())
    console.log(stack.join(""))
    return stack.reverse().join("");
};