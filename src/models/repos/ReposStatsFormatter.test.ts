
const format = (num: string): string => {
    return num
}
test("clones less than 100 remains as it is", () => {
    const formatted = format("99")
    expect(formatted).toBe("99")
})
 
