import { React, Component } from 'react';

import reactionsTemplate from '../../../reactionsTemplate.json';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

class SummaryDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateFilter: "d",
      dimensions: [],
      items: [],
  };
  }

  componentDidMount() {
    const dimensions = reactionsTemplate.filter((item) => { return item.isPositive===true });
    const { items } = this.props;
    const processedItems = [];

    if (items.length>0) {
      dimensions.forEach((element) => {
        const calcItem={
          dimension: element.dimension,
          pos: items.filter((item) => { return item.dimension === element.dimension && item.isPositive===true })[0].count,
          neg: items.filter((item) => { return item.dimension === element.dimension && item.isPositive===false})[0].count,
        };
        processedItems.push(calcItem);
      })

      this.setState({
        dimensions,
        items: processedItems,
      });
    }
  }

  render() {

    const { items } = this.state;
    console.log("items", items);

    return (
      <>
        <div className="flex flex-col items-center justify-around mx-20 py-2 my-2 border rounded-xl border-gray-400 bg-white">
          {items.map( (item, index ) => {
            return (
              <div key={index} className="flex flex-1 items-center">
                <div className="flex flex-row items-center">
                  <h2 className="text-xs px-2">
                    {item.pos}
                  </h2> 
                  <ThumbUpIcon className="text-green-800 w-4 h-4 "/>
                </div>
                  <h2 className="text-s flex justify-center font-thin w-24">
                    {item.dimension}
                  </h2>
                <div className="flex flex-row items-center">
                  <ThumbDownIcon className="text-red-800 w-4 h-4 "/>
                  <h2 className="text-xs px-2">
                    {item.neg}
                  </h2> 
                </div>
              </div>
            )
          })}

        </div>
      </>

    )
  }
}

export default SummaryDashboard;
      