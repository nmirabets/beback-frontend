import React, { Component } from "react";

import { withAuth } from "../../../providers/AuthProvider";
import { ChevronRightIcon, PlusCircleIcon, PencilAltIcon, MinusCircleIcon, MenuIcon, EyeIcon} from '@heroicons/react/outline';
// import BackBtn from "../../components/customer/BackBtn";

import BotNavBar from "../../../components/manager/BotNavBar";

class SetMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [],
      editMode: true,
      visibleMode: false
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
    const { menus, editMode } = this.state;
    return (
      <>
        <header className= "flex h-14 items-center justify-center border border-gray-600 border-b-1 bg-gray-200">
          {(editMode ? <PlusCircleIcon className="flex-none w-8 h-8 text-yellow-700 m-4" onClick={this.handleAdd}/> : <EyeIcon className="flex-none w-8 h-8 text-yellow-700 m-4"/>)}
          <h1 className="flex justify-center flex-grow text-2xl font-extralight" >Menús</h1>
          <PencilAltIcon className="flex-none w-8 h-8 text-yellow-700 m-4" onClick={this.handleAdd} />
        </header>
        <div className="flex flex-col">
          {menus.map( (item, index) => {
            return (
              <div className="flex p-3 text-m justify-between border border-gray-300" key={index} onClick={this.handleClick}>
                {(editMode ? <MenuIcon className="w-6 h-6 text-gray-600" /> : "")}
                <h3 className="font-light">{item.name}</h3>
                {(editMode ? <MinusCircleIcon className="w-6 h-6 text-red-600 mx-2"/> :                   <ChevronRightIcon className="w-6 h-6 text-gray-600"/>)}
              </div> 
            )
          })}

        </div>
        <BotNavBar activeTab="menu"/>
      </>
    );
  }
}

export default withAuth(SetMenu);
