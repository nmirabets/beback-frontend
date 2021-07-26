import React, { Component } from "react";

import { withAuth } from "../../../providers/AuthProvider";
import { ChevronRightIcon,ChevronLeftIcon, PlusCircleIcon } from '@heroicons/react/outline';
// import BackBtn from "../../components/customer/BackBtn";

import BotNavBar from "../../../components/manager/BotNavBar";

class SetItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
      items: [],
  };
  }

  componentDidMount() {
    this.setState({
      menus: [{ name:"Menú de día"}, { name: "Menú de noche" }, { name: "Festival de sabores" }]
    })
  }

  handleAdd = () => {

  }

  handleClick = () => {

  }

  render() {
    // const { menu } = this.state;
    const { items } = this.state;
    return (
      <>
        <header className= "flex h-14 items-center justify-center border border-gray-600 border-b-1 bg-gray-200">
          <div className="flex flex-row place-items-center m-2 w-1/4">
            <ChevronLeftIcon className="w-6 h-6 text-yellow-700"/>
            <h2 className="flex justify-center text-xl font-thin text-yellow-700">Menús</h2>
          </div>
          <h1 className="flex justify-center flex-grow text-2xl font-extralight" >Menú del día</h1>
          <div className="flex justify-end items-center w-1/4 h-10 text-yellow-700 m-1" >
          <PlusCircleIcon className=" h-10 text-yellow-700 m-2" onClick={this.handleAdd}/>
          </div>

        </header>
        <div className="flex flex-col">
          {items.map( (item) => {
            return (
              <>
                <div className="flex p-3 text-m justify-between border border-gray-300" onClick={this.handleClick}>
                  <h3 className="font-light">{item.name}</h3>
                  <ChevronRightIcon className="w-6 h-6 text-gray-600"/>
                </div> 
              </>
            )
          })}

        </div>
        <BotNavBar activeTab="set-menu"/>
      </>
    );
  }
}

export default withAuth(SetItems);
