function isLessThan1k(num: string) {
    return num.length < 4
}

function isLessThanOneMillion(num: string) {
    return num.length < 7
}

function isMoreOrEqualThanAMillion(num: string) {
    return num.length >= 7
}

function is1k(num: string) {
    return num.length === 4
}

const THOUSAND = "k"
const MILLION = "m"

const HUNDREDS = 3

const format = (num: string): string => {


    if (isLessThan1k(num)) {
        return num
    }
    const chars = Array.from(num)
    if (isLessThanOneMillion(num)) {
        const hundredsDigits = num.length - HUNDREDS
        const hundreds = chars.slice(0,hundredsDigits).join("")
        const afterDot =  is1k(num) ? "." + chars.slice(hundredsDigits, 4).join("") :  THOUSAND
        return hundreds + afterDot
    }

    if (isMoreOrEqualThanAMillion(num)) {
        const until =  HUNDREDS + (num.length - 8 >= 0 ? num.length - 8 : 0)
        const millionDigits = num.length - 6
        return chars.slice(0,millionDigits).join("") + "." + chars.slice(millionDigits, until).join("") + MILLION
    }

}

test("less than 1000 remains as it is", () => {
    const formatted = format("999")
    expect(formatted).toBe("999")
})
 
test("between 1000 and 9999 is format with dot separating units", () => {
    const formatted = format("9999")
    expect(formatted).toBe("9.999")
})

test("between 10000 and 11000 is format as 10k", () => {
    const formatted = format("10999")
    expect(formatted).toBe("10k")
})

test("between 10000 and 99999 is rounded", () => {
    const formatted = format("99999")
    expect(formatted).toBe("99k")
})

test("between 100000 and 199999 is rounded with two digits", () => {
    const formatted = format("111999")
    expect(formatted).toBe("111k")
})

test("between 1000000 and 1999999 is rounded with two digits", () => {
    const formatted = format("1211999")
    expect(formatted).toBe("1.21m")
})

test("between 10000000 and 19999999 is rounded with two digits", () => {
    const formatted = format("12119999")
    expect(formatted).toBe("12.1m")
})

test("between 100000000 and 199999999 is rounded with two digits", () => {
    const formatted = format("121199999")
    expect(formatted).toBe("121.1m")
})
