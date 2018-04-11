import React, { Component } from 'react';
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import { Dropdown, Button } from 'semantic-ui-react';
//icons
import AngleRight from 'react-icons/lib/fa/angle-right';

class Quened extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: 'Google',
            sumQuened: '',
            Quened: this.props.value
        }
    }
    //ALL BOX BUTTONS
//designMoveToValue
//planningMoveToValue
//developmentMoveToValue
//testingMoveToValue
//completedMoveToValue
    removeItem(item) {
        const newItems = this.state.Quened.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Quened: [...newItems]
        });
    }
    moveToDesign(item) {
        this.props.designMoveToValue(item);
        const newItems = this.state.Quened.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Quened: [...newItems]
        });
    }
    moveToDevelopment(item) {
        this.props.developmentMoveToValue(item);
        const newItems = this.state.Quened.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Quened: [...newItems]
        });
    }
    moveToTesting(item) {
        this.props.testingMoveToValue(item);
        const newItems = this.state.Quened.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Quened: [...newItems]
        });
    }
    moveToCompleted(item) {
        this.props.completedMoveToValue(item);
        const newItems = this.state.Quened.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Quened: [...newItems]
        });
    }
    moveToPlanning(item) {
        this.props.planningMoveToValue(item);
        const newItems = this.state.Quened.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Quened: [...newItems]
        });
    }

    render() {
        console.log("QuenedComponents");
        const array1 = this.state.Quened;
        const map1 = array1.map(x => x.split('/')[2]);
        const map2 = map1.map(x => Number(x));
        const map3 = array1.map(x => x.split('/')[1].replace(/\s*/g,''));
        const map4 = map3.filter(item => item === 'Google');
        const map5 = array1.includes('Google');
        this.state.sumQuened = map2.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);

        console.log(map5);

        const Quened = this.state.Quened.map((val, key) =>(
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
                            <Button onClick={(e)=>this.moveToDesign(val)}>move To Design</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToDevelopment(val)}>move To Development</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToTesting(val)}>move To Testing</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToCompleted(val)}>move To Completed</Button>
                            <br/>
                            <Button onClick={(e)=>this.moveToPlanning(val)}>move To Planning</Button>
                            <br/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        ));
        return (
            <div className="column quenedItems">
                <div className="header">
                    <div className="title">
                        <h4>Quened</h4>
                        <span>{this.state.Quened.length} project{this.state.Quened.length > 1 && "'s"} <span>${this.state.sumQuened}</span></span>
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
                        ref="Quened"
                        onChange={(items) => {
                            this.setState({ Quened: items });
                        }}
                    >
                        {Quened}
                    </Sortable>
                </div>
            </div>
        );
    }

}
export default Quened;