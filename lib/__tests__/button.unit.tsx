import * as renderer from 'react-test-renderer';
import React from 'react'
import Button from '../button'

describe('button', () => {
    it("button is a div", () => {
        const json = renderer.create(<Button></Button>).toJSON();
        expect(json).toMatchSnapshot();
    })
})