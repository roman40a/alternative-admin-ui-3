import rewire from "rewire"
const remote_data = rewire("./remote-data")
const combineRD2 = remote_data.__get__("combineRD2")
// @ponicode
describe("combineRD2", () => {
    test("0", () => {
        let callFunction: any = () => {
            combineRD2({ pending: true, failure: false, result: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" }, { pending: true, failure: false, result: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            combineRD2({ pending: false, failure: false, result: false }, { pending: false, failure: false, result: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            combineRD2({ pending: false, failure: false, result: 100 }, { pending: false, failure: false, result: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            combineRD2({ pending: false, failure: false, result: 100 }, { pending: true, failure: false, result: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            combineRD2({ pending: false, failure: false, result: false }, { pending: false, failure: false, result: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            combineRD2({ pending: true, failure: false, result: Infinity }, { pending: false, failure: false, result: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remote_data.combineRemoteData", () => {
    test("0", () => {
        let param1: any = [{ pending: false, failure: false, result: 1 }, { pending: false, failure: false, result: true }]
        let callFunction: any = () => {
            remote_data.combineRemoteData(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = [{ pending: false, failure: false, result: 100 }, { pending: false, failure: false, result: true }]
        let callFunction: any = () => {
            remote_data.combineRemoteData(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = [{ pending: false, failure: false, result: 1 }, { pending: false, failure: false, result: false }]
        let callFunction: any = () => {
            remote_data.combineRemoteData(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = [{ pending: false, failure: false, result: -100 }, { pending: false, failure: false, result: false }]
        let callFunction: any = () => {
            remote_data.combineRemoteData(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = [{ pending: false, failure: false, result: 0 }, { pending: false, failure: false, result: true }]
        let callFunction: any = () => {
            remote_data.combineRemoteData(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            remote_data.combineRemoteData([])
        }
    
        expect(callFunction).not.toThrow()
    })
})
