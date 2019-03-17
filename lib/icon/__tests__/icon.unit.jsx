import * as renderer from "react-test-renderer"
import React from 'react'
import Icon from '../icon'
import {mount} from "enzyme"

describe("test icon component", () => {
    it("render successfully", () => {
        const json = renderer.create(<Icon name="qq"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it("icon onClick fn called", () => {
        const fn = jest.fn()
        const component = mount(<Icon name="qq" onClick={fn}/>)
        component.find("svg").simulate("click")
        expect(fn).toBeCalled()
    })
})