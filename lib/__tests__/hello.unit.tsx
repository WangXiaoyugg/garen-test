function add(a:number, b:number) {
    return a + b;
}

describe('test add fn', () => {
    it('add(1,2) equal 3', () => {
        expect(add(1,2)).toEqual(3)
    })
})