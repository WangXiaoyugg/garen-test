import classes from "../classes";

describe("tests classes fn", () => {
    it("accept one classNames", () => {
        const result = classes("a")
        expect(result).toEqual("a")
    })
    it("accept two classNames", () => {
        const result = classes("a", "b")
        expect(result).toEqual("a b")
    })
    it("accept undefined and result have no undefined", () =>  {
        const result = classes("a", undefined)
        expect(result).toEqual("a")
    })
    it("accept any value and result have no strange value", () => {
        const result = classes("a", undefined, "你好", false, null)
        expect(result).toEqual("a 你好")
    })
    it("accept zero className", () => {
        const result = classes();
        expect(result).toEqual('');
    })
})