class MiniMaple{
    



    derivative(exp, variable) {
        let state = "+"
        let tmp = ""
        let coef = 1
        let res = ""
        let sign = "+"
        let digits = "1234567890".split('');
        let vars = " abcdefghijklmnopqrstuvwxyz"
        let allowedSymbols = ' +-^1234567890abcdefghijklmnopqrstuvwxyz'.split('');
        let expression = exp.toLowerCase() + "+"
        let m = new Map()
        for (let i = 0; i < expression.length; i++) {
            let chr = expression[i]
            if (!allowedSymbols.includes(chr)) {
                throw "wrong symbol in input" + chr
            }
            if (digits.includes(chr)){
                if (state == "ignore") {
                    continue
                }
                if (digits.includes(state)) {
                    tmp += chr
                    state = chr
                    continue
                }
                if (state == "-" || state == "+"){
                    tmp = chr
                    state = chr
                    continue
                }
                if (state = "^") {
                    tmp += chr
                    continue
                }
                if (vars.includes(state))
                    throw "wrong symbol" + chr +" after " + state
                    return ""
            }
            switch (chr){
                case " ":
                    break
                case variable:
                    if (state == "^") {
                        throw "wrong symbol" + chr +" after " + state
                        return ""
                    }
                    state = variable
                    if (tmp=="") {
                        coef = 1
                    } else {
                        coef = Number(tmp)
                    }
                    tmp = ""
                    break
                case "+":
                    if (state == "ignore"){
                        state = chr
                        sign = chr
                        break
                    }
                    if (state == "+" || state == "-"){
                        state = chr
                        sign = chr
                        break
                    }
                    if (state == "^") {
                        if (tmp.length <1) {
                            throw "wring symbol after ^"
                        }
                        if (Number(tmp)-1 == 1) {
                            res += sign + (coef*Number(tmp)).toString() + "*"+ variable
                        } else {
                            res += sign + (coef*Number(tmp)).toString()+ "*" + variable + "^" + (Number(tmp)-1)
                        }
                        state = "+"
                        sign = "+"
                        tmp = ""
                        break
                    }
                    if (state == variable){
                        res += sign + (coef).toString() 
                        state = "+"
                        sign = "+"
                        tmp = ""
                        break
                    }
                    if (digits.includes(state)) {
                        tmp = ""
                        sign = "+"
                        state = "+"
                        break
                    }
                    
                    break
                case "-":
                    if (state == "ignore"){
                        state = chr
                        sign = chr
                        break
                    }
                    if (state == "+"){
                        state = "-"
                        sign = "-"
                        break
                    }
                    
                    if (state == "-"){
                        state = "+"
                        sign = "+"
                        break
                    }
                    if (state == "^") {
                        if (tmp.length <1) {
                            throw "wring symbol after ^"
                        }
                        if (Number(tmp)-1 == 1) {
                            res += sign + (coef*Number(tmp)).toString() + "*"+ variable
                        } else {
                            res += sign + (coef*Number(tmp)).toString()+ "*" + variable + "^" + (Number(tmp)-1)
                        }
                        state = "+"
                        tmp = ""
                        sign = "-"
                        break
                    }
                    if (state == variable){
                        res += sign + (coef).toString() 
                        state = "+"
                        tmp = ""
                        sign = "-"
                        break
                    }
                    if (digits.includes(state)) {
                        tmp = ""
                        state = "+"
                        sign = "-"
                        break
                    }
                    
                    break
                case "^":
                    if (digits.includes(state)) {
                        throw "wrong symbol" + chr +" after " + state
                        return ""
                    }
                    if (state == "ignore"){
                        break
                    }

                    state = "^"
                    tmp = ""
                    break

                default:
                    coef = 1
                    tmp = ""
                    state = "ignore"
                    sign = "+"
                }
          }
          //alert(res)
          return res.substring(1);
    }

}

export {MiniMaple}