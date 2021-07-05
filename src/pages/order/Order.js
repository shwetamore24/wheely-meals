import React, { Component } from 'react';

import ORDER_DATA from './order.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodCollection: ORDER_DATA,
    };
  }

  render() {
    const { foodCollection } = this.state;
    return (
      <div className="shop-page">
        {/* {console.log(foodCollection)} */}
        {foodCollection.map(({ id, ...otherCollectionProps }) => (
          // console.log(id)
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Order;
