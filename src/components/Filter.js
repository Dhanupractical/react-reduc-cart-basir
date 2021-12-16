import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'> 
      <div className="filter-result"> {this.props.count} Products</div>
      <div className="filter-sort">
            order {" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
                <option value="Latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
      </div>
      <div className="filter-size">
          Filter{""}
          <select value={this.props.size} onChange={this.props.filterProducts}>
              <option value="" className="value">ALL</option>
              <option value="XS" className="value">XS</option>
              <option value="S" className="value">S</option>
              <option value="M" className="value">M</option>
              <option value="L" className="value">L</option>
              <option value="XL" className="value">XL</option>
              <option value="XXL" className="value">XXL</option>
          </select>
      </div>
      </div>
    )
  }
}
