/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
        }
        else if (ch === ")" || ch === "}" || ch === "]") {
            if(stack.length === 0){
                return false;
            }
            const top = stack.pop();
            if (
                (ch === ")" && top !== "(") ||
                (ch === "}" && top !== "{") ||
                (ch === "]" && top !== "[")
            ) {
                return false;
            }
        }
    }
    return stack.length === 0

};