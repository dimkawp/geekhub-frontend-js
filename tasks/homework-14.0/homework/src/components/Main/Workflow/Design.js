import React, { Component } from 'react';
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import { Dropdown, Button } from 'semantic-ui-react';
//icons
import AngleRight from 'react-icons/lib/fa/angle-right';

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumDesign: '',
            Design:
                [
                    'Wordpress theme1 / Symu.co / 3500',
                    'Wordpress theme2 / Symu.co / 1500',
                    'Wordpress theme3 / Symu.co / 500'
                ],
        }
    }
    //ALL BOX BUTTONS
    removeItem(item) {
        const newItems = this.state.Design.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Design: [...newItems]
        });
    }

    moveToDevelopment(item) {
        this.state.Development.push(item);
        this.setState(this.state);
        this.state;
        const newItems = this.state.Design.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Design: [...newItems]
        });
    }
    moveToTesting(item) {
        this.state.Testing.push(item);
        this.setState(this.state);
        this.state;
        const newItems = this.state.Design.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Design: [...newItems]
        });
    }
    moveToCompleted(item) {
        this.state.Completed.push(item);
        this.setState(this.state);
        this.state;
        const newItems = this.state.Design.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Design: [...newItems]
        });
    }
    moveToPlanning(item) {
        this.state.Planning.push(item);
        this.setState(this.state);
        this.state;
        const newItems = this.state.Design.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Design: [...newItems]
        });
    }
    moveToQuened(item) {
        this.state.Quened.push(item);
        this.setState(this.state);
        this.state;
        const newItems = this.state.Design.filter(projectsItems => {
            return projectsItems !== item;
        });
        this.setState({
            Design: [...newItems]
        });
    }

    render() {
        console.log("QuenedComponents");
        const array1 = this.state.Design;
        const map1 = array1.map(x => x.split('/')[2]);
        const map2 = map1.map(x => Number(x));
        this.state.sumDesign = map2.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);

        const Design = this.state.Design.map((val, key) =>(
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
            <div className="column designItems">
                <div className="header">
                    <div className="title">
                        <h4>Design</h4>
                        <span>1 project <span>${this.state.sumDesign}</span></span>
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
                        ref="Design"
                        onChange={(items) => {
                            this.setState({ Design: items });
                        }}
                    >
                        {Design}
                    </Sortable>
                </div>
            </div>
        );
    }

}
export default Design;