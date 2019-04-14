function scopedClassMaker(prefix:string){
    return function(name?: any) {
        return [prefix, name].filter(Boolean).join("-")
    }
}
export { scopedClassMaker }