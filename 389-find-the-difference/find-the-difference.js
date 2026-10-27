
var findTheDifference = function(s, t) {
    const obj = {};
    
    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        obj[ch] = (obj[ch] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        const ch = t.charAt(i);

        if (!obj[ch]) {
            return ch;
        }

        obj[ch]--;
    }
};
