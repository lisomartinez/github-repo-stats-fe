import format from "./RepoStatsFormatter"

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

test("if is not a number throw error", () => {
    const formatted = () => format("12a1199999")
    expect(formatted).toThrow(TypeError)
    expect(formatted).toThrow("num should be a integer number")
})

test("if is not an integer throw error", () => {
    const formatted = () => format("12.2")
    expect(formatted).toThrow(TypeError)
    expect(formatted).toThrow("num should be a integer number")
})
