import React, { Component, Fragment } from 'react'
// import Product from './components/Product'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple Iphone 6 Plus 16GB',
          price: 15000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-64gb128gb-400x450.png',
          status: true,
        },

        {
          id: 2,
          name: 'Samsung Galaxy S6',
          price: 8000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/71081/samsung-galaxy-s6-edge-4-400x460.png',
          status: true,
        },
        {
          id: 1,
          name: 'Oppo F1s',
          price: 5000000,
          image: 'https://didongthongminh.vn/upload_images/2017/10/oppo-f1s-gold.png',
          status: true,
        },
      ],
      isActive: true,
    }
  }

  onSetState = () => {
    this.setState({
      isActive : !this.state.isActive,
    })
  }

  render() {

    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td><span className="label label-success">{product.price} VNĐ</span></td>
          </tr>
        )
      };
      return result;
    });
    return (
      <Fragment>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">State</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">

            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
            </table>
            
            <button type="button" className="btn btn-warning" onClick={ this.onSetState }>
              Active : {this.state.isActive === true ? 'true' : 'false'}
            </button>
            
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
