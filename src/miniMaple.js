class MiniMaple{
    
    derivative(exp, variable) {
        let res = ""
        let derivTerm = ""
        const [listOfSigns, listOfTerms] = getListOfTermsAndSigns(exp)
        for (let i = 0; i < listOfTerms.length; i++) {
            derivTerm = getDerivativeFromTerm(listOfTerms[i], variable)
            if (derivTerm == "") {
                continue
            }
            res += listOfSigns[i]+derivTerm
        }
        if (res == "") {
            return "0"
        }
        res = res.substring(1);
        return res
    }

}

function getDerivativeFromTerm(term, variable) {
    let res = ""
    const regex1 = new RegExp(`(\\d+)?\\*?(`+variable+`)(?:\\^(\\d+))?`);
    const matches = term.match(regex1)
    if (matches != null) {
        let mult = 1
        if (matches[1] != undefined ) {
            mult = Number(matches[1])
        }
        let power = 1
        if (matches[3] != undefined) {
            power = Number(matches[3])
        }
        mult = mult * ( power - 1 > 0 ? power : 1)
        let multStr = (mult>0 ? mult.toString() : "")
        if (multStr != "" && power > 1) {
            multStr += "*"
        }
        res = multStr + ( power > 1 ? variable : "") + ( power - 1 > 1 ? "^" + (power - 1).toString() : "")
    }
    return res
}

function getListOfTermsAndSigns(exp) {
    let tmp = ""
    exp = '+' + exp.replace(/\s/g, '');
    let listOfTerms = []
    let allowedSymbols = '+-^1234567890abcdefghijklmnopqrstuvwxyz'.split('');
    let listOfSigns = []
    let firstSign = true
    for (let i = 0; i < exp.length; i++) {        
        if (!allowedSymbols.includes(exp[i])) {
            throw "wrong symbol in input " + exp[i]
        }
        if (exp[i]=="+" || exp[i] =="-") {
            listOfSigns.push(exp[i])
            if (firstSign){
                firstSign = false
                continue
            }
            listOfTerms.push(tmp)
            tmp = ""
            continue
        }
        tmp += exp[i]
    }
    listOfTerms.push(tmp)
    return [listOfSigns, listOfTerms]
}

export {MiniMaple}