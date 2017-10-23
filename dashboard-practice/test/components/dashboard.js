import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import Dashboard from '../../js/components/dashboards';
import {expect} from 'chai';

const {renderIntoDocument, scryRendererdDOMComponentsWithClass, Simulate} = TestUtils;

describe('Dashboard', () => {
    it('renders the dashboard', () => {
        const component = renderIntoDocument(
            <Dashboard title="Dashboard"/>
        );
        const title = findDOMNode(component.refs.title);
        expect(title).to.be.ok;
        expect(title.textContent).to.contain('Dashboard');
    });
});