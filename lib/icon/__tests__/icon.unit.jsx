import * as renderer from "react-test-renderer"
import React from 'react'
import Icon from '../icon'
// import {mount} from 

describe("test icon component", () => {
    it("render successfully", () => {
        const json = renderer.create(<Icon name="qq"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})