import React, { Component } from 'react';
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import { Dropdown, Button } from 'semantic-ui-react';
//icons
import AngleRight from 'react-icons/lib/fa/angle-right';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumTesting: '',
            Testing: this.props.value
        }
    }
    //ALL BOX BUTTONS
    removeItem(item) {
        const newItems = this.state.Testing.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Testing: [...newItems]
        });
    }
    moveToQuened(item) {
        this.props.quenedMoveToValue(item);
        const newItems = this.state.Testing.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Testing: [...newItems]
        });
    }
    moveToPlanning(item) {
        this.props.planningMoveToValue(item);
        const newItems = this.state.Testing.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Testing: [...newItems]
        });
    }
    moveToDevelopment(item) {
        this.props.developmentMoveToValue(item);
        const newItems = this.state.Testing.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Testing: [...newItems]
        });
    }
    moveToCompleted(item) {
        this.props.completedMoveToValue(item);
        const newItems = this.state.Testing.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Testing: [...newItems]
        });
    }
    moveToDesign(item) {
        this.props.designMoveToValue(item);
        const newItems = this.state.Testing.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Testing: [...newItems]
        });
    }

    render() {
        console.log("DevelopmentComponents");
        const array1 = this.state.Testing;
        const map1 = array1.map(x => x.split('/')[2]);
        const map2 = map1.map(x => Number(x));
        this.state.sumTesting = map2.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);

        const Testing = this.state.Testing.map((val, key) =>(
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
                            <Button onClick={(e)=>this.moveToDevelopment(val)}>move To Development</Button>
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
                        <h4>Testing</h4>
                        <span>{this.state.Testing.length} project{this.state.Testing.length > 1 && "'s"} <span>${this.state.sumTesting}</span></span>
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
                        ref="Testing"
                        onChange={(items) => {
                            this.setState({ Testing: items });
                        }}
                    >
                        {Testing}
                    </Sortable>
                </div>
            </div>
        );
    }

}
export default Testing;