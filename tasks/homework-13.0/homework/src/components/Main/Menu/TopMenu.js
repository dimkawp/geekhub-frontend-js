import React, { Component } from 'react';
//semantic-ui
import { Button, Modal, Search } from 'semantic-ui-react'
import _ from "lodash";
import store from "../../../redux/store";

const source = [
    {
        "title": "Roberts Inc",
        "description": "Inverse dedicated infrastructure",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/josecarlospsh/128.jpg",
        "price": "$66.77"
    },
    {
        "title": "Morissette Inc",
        "description": "Profit-focused upward-trending secured line",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/shaneIxD/128.jpg",
        "price": "$70.42"
    },
    {
        "title": "Purdy, Aufderhar and Hintz",
        "description": "Total value-added database",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg",
        "price": "$69.99"
    },
    {
        "title": "Hessel Group",
        "description": "Virtual 24 hour orchestration",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",
        "price": "$64.84"
    },
    {
        "title": "Bergnaum Group",
        "description": "Polarised tangible groupware",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/alxndrustinov/128.jpg",
        "price": "$13.33"
    }
]

class TopMenu extends Component {
    state = {
        isLoading: false,
        results: [],
        value: "",
        avatarImg: ''
    };
    //SEARCH
    componentWillMount() {
        this.resetComponent();
    }
    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "" });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), "i");
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch)
            });
        }, 500);
    };
    handleResultSelect = (e, { result }) =>
        this.setState({ value: result.title });
    //JQ
    componentDidMount() {
        const $ = window.$;
            $(".sideMenu").click(function(){
                $(".SideMenuBlock").toggle("slow");
            });
            $(".dropdownContent").hide();
            $(".dropBtn").click(function(){         
                $(".dropdownContent").toggle("fast");
            });
            $(".testSearch").hide();
            $(".suarchButton").click(function () {
                $(".suarchButton").hide();
                $(".testSearch").toggle("slow");
            });
    }
    //LOGOUT
    logOut = () => {
        console.log(localStorage.getItem('User'));
        localStorage['User'] = 'false';
        localStorage['Token'] = '';
        window.location.reload();
        console.log(localStorage.getItem('User'));
    }
    //BUTTON ADD Project
    addProjectEvent = () => {
        console.log('add');
    }
    //FORM ADD Avatar
    addAvatar = () => {
        let url = this.avatarImg.value.trim();
        this.setState({ avatarImg: url });
        store.dispatch({
            type: 'User',
            payload: {
                user: {
                    avatarUrl: url,
                }
            }
        })
    }

  render() {
    console.log("TopMenuComponents");
    return (
        <section id="topMenu">
            <div className="topMenuBlock">
                <div className="navigation">
                    <div className="sideMenu">
                        <i className="material-icons">format_align_justify</i>
                    </div>
                    <div className="search">
                        <Search
                            className="testSearch"
                            loading={false}
                            results={this.state.results}
                            value={this.state.value}
                            onSearchChange={this.handleSearchChange}
                            onResultSelect={this.handleResultSelect}
                        />
                        <i className="suarchButton material-icons">search</i>
                    </div>
                </div>
                <div className="userProfile">
                <Modal
                    trigger={<Button className="addProject" onClick={this.addProjectEvent}><i className="material-icons">add</i>Add project</Button>}
                    header='ADD NEW PROJECT'
                    content=''
                    actions={[
                    'ADD',
                    { key: 'done', content: 'CLOSE', positive: true },
                    ]}
                />                   
                    <i className="material-icons">mail</i>
                    <i className="material-icons">notifications</i>
                    <div className="dropdownMenu">
                    <img className="avatar" src={store.getState().avatarUrl} alt="avatat"/>
                        <button className="dropBtn"><i className="material-icons">arrow_drop_down</i></button>
                        <div className="dropdownContent">

                        <input className="" type="text" placeholder="URL ..." ref={el => this.avatarImg = el}/>
                        <button type="submit" onClick={this.addAvatar}>ADD</button>

                            <button onClick={this.logOut}>LOGOUT</button>
                        </div>
                    </div>        
                </div>
            </div>
        </section>

    );
  }
}

export default TopMenu;
