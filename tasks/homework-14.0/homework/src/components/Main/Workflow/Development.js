import React, { Component } from 'react';
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import { Dropdown, Button } from 'semantic-ui-react';
//icons
import AngleRight from 'react-icons/lib/fa/angle-right';

class Development extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumDevelopment: '',
            Development: this.props.value
        }
    }
    //FILTER
    getFilter(val) {
        let a = this.state.Development;
        let Filter = val;

        let result = a.filter(function(value)
        {
            if (Filter === 'All') {
                return value;
            }
            else {
                return value.includes(Filter);
            }
        });
        this.setState({
            Development: result
        });
        this.props.developmentLength(result.length);
    }
    //ALL BOX BUTTONS
    removeItem(item) {
        const newItems = this.state.Development.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Development: [...newItems]
        });
        this.props.developmentLength(newItems.length);
    }
    moveToQuened(item) {
        this.props.quenedMoveToValue(item);
        const newItems = this.state.Development.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Development: [...newItems]
        });
    }
    moveToPlanning(item) {
        this.props.planningMoveToValue(item);
        const newItems = this.state.Development.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Development: [...newItems]
        });
    }
    moveToTesting(item) {
        this.props.testingMoveToValue(item);
        const newItems = this.state.Development.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Development: [...newItems]
        });
    }
    moveToCompleted(item) {
        this.props.completedMoveToValue(item);
        const newItems = this.state.Development.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Development: [...newItems]
        });
    }
    moveToDesign(item) {
        this.props.designMoveToValue(item);
        const newItems = this.state.Development.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Development: [...newItems]
        });
    }

    render() {
        console.log("DevelopmentComponents");
        const array1 = this.state.Development;
        const map1 = array1.map(x => x.split('/')[2]);
        const map2 = map1.map(x => Number(x));
        this.state.sumDevelopment = map2.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);

        const Development = this.state.Development.map((val, key) =>(
            <div className="item" key={uniqueId()} data-id={val}>
                <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                </div>
                <div className="description">
                    <p>{val.split('/')[0]}</p>

                    <span>{val.split('/')[1]} ${val.split('/')[2]}</span>
                </div>
                <div className="dropbox">
                    <Dropdown className="dropDownBox">
                        <Dropdown.Menu className="dropDownBoxMenu">
                            <Button onClick={(e)=>this.removeItem(val)}>delete</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToQuened(val)}>move To Quened</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToPlanning(val)}>move To Planning</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToTesting(val)}>move To Testing</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToCompleted(val)}>move To Completed</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToDesign(val)}>move To Design</Button>
                            <br/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        ));
        return (
            <div className="column designItems">
                <div className="header">
                    <div className="title">
                        <h4>Development</h4>
                        <span>{this.state.Development.length} project{this.state.Development.length > 1 && "'s"} <span>${this.state.sumDevelopment}</span></span>
                    </div>
                    <button><AngleRight /></button>
                </div>
                <div className="items">
                    <Sortable
                        options={{
                            animation: 150,
                            group: {
                                name: 'shared',
                                pull: true,
                                put: true
                            }
                        }}
                        className="items"
                        ref="Development"
                        onChange={(items) => {
                            this.setState({ Development: items });
                        }}
                    >
                        {Development}
                    </Sortable>
                </div>
            </div>
        );
    }

}
export default Development;