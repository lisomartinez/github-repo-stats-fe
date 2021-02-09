export default (num: string): string => {
    validateFormat(num)
    if (isLessThan1k(num)) return num
    if (isLessThan10k(num)) return formatLessThan10k(num)
    if (isLessThanOneMillion(num)) return formatLessThanOneMillion(num)
    if (isOneMillion(num)) return formatOneMillion(num)
    return formatMoreThanOneMillion(num)
}

const THOUSAND_SYMBOL = "k"
const MILLION_SYMBOL = "m"
const HUNDREDS_DIGITS = 3
const THOUSAND_INDEX = 0
const ONE_THOUSAND = 4
const TEN_THOUSANDS = 5
const START = 0
const DOT = "."

const validateFormat = (num: string) => {
    if (isNaN(Number(num))) throw new TypeError("num should be a integer number")
    if (Number(num) % 1 !== 0) throw new TypeError("num should be a integer number")
}

function getDigits(num: string) {
    return Array.from(num)
}

const hundreds = (chars: string[]): string => DOT + chars.slice(1, 4).join("")

const isLessThan1k = (num: string): boolean => num.length < 4

const isLessThan10k = (num: string): boolean => num.length >= ONE_THOUSAND && num.length < TEN_THOUSANDS

const formatLessThan10k = (num: string): string => {
    const digits = getDigits(num)
    return digits[THOUSAND_INDEX] + hundreds(digits)
}

const isLessThanOneMillion = (num: string): boolean => num.length < 7

const formatLessThanOneMillion = (num: string): string => {
    const digits = getDigits(num)
    return getHundredOfThousands(num, digits) + THOUSAND_SYMBOL
}

const getHundredOfThousands = (num: string, digits: string[]): string => {
    const hundredsOfThousandIndex = num.length - HUNDREDS_DIGITS
    return digits.slice(START, hundredsOfThousandIndex).join("")
}

const isOneMillion = (num: string) => num.length === 7

const formatOneMillion = (num: string) => {
    const digits = getDigits(num)
    return getMillions(digits, 1) + DOT + digits.slice(1, 3).join("") + MILLION_SYMBOL
}

const getMillions = (digits: string[], millionDigits: number) => digits.slice(0, millionDigits).join("")

const formatMoreThanOneMillion = (num: string): string => {
    const digits = getDigits(num)
    const digitsToInclude = HUNDREDS_DIGITS + num.length - 8
    const millionDigits = num.length - 6
    return getMillions(digits, millionDigits) + DOT + digits.slice(millionDigits, digitsToInclude).join("") + MILLION_SYMBOL
}
