import React, { Component } from 'react';

export class AddProduct extends Component{

    state = {
        addVarian: false,
        varian: [
            {
                color: null,
                size: null
            }
        ]
    }

    addVarian = () => {
        this.setState((prevState) => ({
            varian: [...prevState.varian, {color: null, size: null}]
        }))
    }

    onChange = (event) => {
        if(['color', 'size'].includes(event.target.name)){
            let addNewVarian = [...this.state.varian]
            addNewVarian[event.target.id][event.target.name] = event.target.value;
            
            this.setState({varian: addNewVarian})
        }else{
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    render(){
        return(
            // ADD PRODUCT
            <div>
                <div className="font-weight-bold pa-font-size-18">
                    Add Product :
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                <div className="px-0 py-4">
                    <div className="form-group">
                        <label className="pa-main-light">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="pa-main-light">Discount</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mx-0 mt-5 mb-0 px-5 py-3" style={{border: "1px solid #f37021", borderRadius: 5}}>
                        <div className="row justify-content-between align-items-center">
                            <div className="font-weight-bold pa-font-size-18">
                                Product Varian
                                <p className="font-weight-light pa-dark-grey">
                                    Add product varian like color or size.
                                </p>
                            </div>
                            <div>
                                <div onClick={() => this.setState({addVarian: true})} className="btn mx-0 my-2 px-2 py-1 font-weight-bold pa-button-submit pa-font-size-16 pa-main-light" style={{borderRadius: 10}}>
                                    Add Varian
                                </div>
                            </div>
                        </div>

                        {
                            this.state.addVarian?
                                <>
                                    <div>
                                        {
                                            this.state.varian.map((value, index) => {
                                                let colorId = `color-${index}`, sizeId = `size-${index}`

                                                return(
                                                    <form onChange={this.onChange}>
                                                        <div key={index} className="px-0 py-3">
                                                            <div className="form-group">
                                                                <label className="pa-main-light">Color</label>
                                                                <input name="color" id={index} value={this.state.varian[index].color} type="text" className="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="pa-main-light">Size</label>
                                                                <input name="size" id={index} value={this.state.varian[index].size} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                )
                                            })
                                        }
                                    </div>
                                    <div onClick={() => this.addVarian()} className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                                        Add Varian
                                    </div>
                                </>
                            :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProduct