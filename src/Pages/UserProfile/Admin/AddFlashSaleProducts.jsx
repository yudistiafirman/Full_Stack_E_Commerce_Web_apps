import React, { Component } from 'react';

export class AddFlashSaleProducts extends Component{
    render(){
        return(
            // ADD FLASH SALE PRODUCTS
            <div>
                <div className="font-weight-bold pa-font-size-18">
                    Flah Sale Events :
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                <div className="px-0 py-4">
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Recipient's username" />
                        <div className="input-group-append">
                            <span className="input-group-text">Date</span>
                        </div>
                    </div>
                </div>
                <div className="font-weight-bold pa-font-size-18">
                    Products :
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                <div className="px-0 py-4">
                    <table class="table border">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Product</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td></td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default AddFlashSaleProducts