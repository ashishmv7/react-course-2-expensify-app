import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'
import {shallow} from 'enzyme'




test('should render header correctly',()=>{
const wrapper=shallow(<Header/>)
expect(toJSON(wrapper)).toMatchSnapshot()


//expect(wrapper.find('h1').length).toBe('Expensify')

    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
