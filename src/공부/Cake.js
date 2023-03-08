import React, { Component } from 'react'

export class cake extends Component {
  state = {
    price: 10000,
    discountPrice: 0,
  }

  discount = () => {
    this.setState(current => ( //current는 this.state
    {discountPrice : current.price * 0.7}
  ))

  }

  render() {
    return (
      <>
        <div>
          <h1>케이크 가격은 {this.state.price} 입니다.</h1>
          <h2>할인 가격은 {this.state.discountPrice} 입니다.</h2>
          <button onClick={this.discount}>할인</button>
        </div>
      </>
    )
  }
}

export default cake
