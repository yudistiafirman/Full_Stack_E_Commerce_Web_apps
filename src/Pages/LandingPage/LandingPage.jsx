import React, { Component }  from 'react';
import Slider from 'react-slick';

import RecomendedProductLoading from './RecomendedProductLoading';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';


import TShirtIcon from './../../Support/Images/T-Shirt.png';
import PantsIcon from './../../Support/Images/Trousers.png';
import ShirtIcon from './../../Support/Images/Shirt.png';
import JacketIcon from './../../Support/Images/Jacket.png';
import ShoesIcon from './../../Support/Images/Shoes.png';
import Newsletter from './../../Support/Images/Newsletter.jpg';
import FlashIcon from './../../Support/Images/Flash.png';

export class LandingPage extends Component {
    
    state = {
      data: null,
      visible: 4
    }
  
    componentDidMount(){
      this.setState({data:
        [
          {id: 1, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
          {id: 2, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
          {id: 3, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
          {id: 4, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"}
        ]
      })

      // this.setState({data:
      //   [
      //     {id: 1, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 2, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 3, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 4, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 5, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 6, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 7, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 8, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 9, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 10, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 11, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      //     {id: 12, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"}
      //   ]
      // })
    }

    mapRecomendedProduct = () => {
      return this.state.data.slice(0, this.state.visible).map((value, id) => {
          return(
            <div key={id} className="col-6 col-md-3 px-3 py-3">
              <div className="pa-recomended-card">
                <img src="https://dynamic.zacdn.com/FzaBpJ57D39_XS13BM6ferdCB_g=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/levi-s-6477-3636532-4.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                <div className="px-3 pt-2 pb-2 pa-bg-light-grey" style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                  {value.product}
                  <p className="font-weight-bold pa-font-size-16 pa-secondary">
                    Rp.{value.price.toLocaleString('id-ID')}
                  </p>
                  <p className="pa-font-size-14 pa-dark-grey">
                    <del>
                      Rp.{value.price.toLocaleString('id-ID')}
                    </del>
                    <span className="mx-1 my-0 pa-secondary">
                      15% OFF
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )
      })
  }

  showMoreProducts = () => {
    let addData = [
      {id: 5, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 6, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 7, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 8, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 9, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 10, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 11, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"},
      {id: 12, product: "MARHEN J Rico Mini Tas...", price: 1019000, url: "https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg"}
    ]
    
    let dataAdded = [...this.state.data, ...addData]

    console.log(dataAdded)

    setTimeout(() => {
      this.setState({data: dataAdded})
    }, 2000);

    // this.setState({visible: this.state.visible + 4})
  }

    render(){
      const mobileSettings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }

      const desktopSettings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false
      }

      return(
        // LANDING PAGE
        <div>
          {/* JUMBOTRON SECTION */}
          <div>
            <div className="px-0 py-5 pa-jumbotron">
              <div className="container w-100 h-100">
                <div className="row justify-content-center align-items-end align-items-md-center h-100">
                  <div className="col-12 pa-light">
                      <h1 className="text-center text-md-right font-weight-bold pa-font-size-50 pa-light">
                          Flash Sale : <br />
                          <span className="text-center text-md-right font-weight-light pa-font-size-50 pa-light">
                              25 - 50%
                          </span>
                      </h1>
                      <h1 className="text-center text-md-right pa-font-size-18 pa-light">
                          * Only On December!
                      </h1>
                      <div className="text-center text-md-right mt-0 mb-0 mt-md-4 mb-md-0">
                          <input type="button" value="Shop Now" className="btn btn-light rounded-0 px-5 py-2 px-md-5 py-md-2" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* FAVOURITE SECTION */}
          <div>
            <div className="container px-0 pt-0 pb-3 pa-favourite-card-desktop-display">
              <div className="px-0 pt-1 pb-0">
                <h3>
                  Favorit Kamu
                </h3>
              </div>

              {/* Desktop Section */}
              <div className="pa-favourite-card-desktop-display">
                <div className="row justify-content-between mx-0 my-3"> 
                  <div className="col-2 row justify-content-center ml-0 mr-0 my-0 px-3 py-3 pa-favourite-card">
                    <div>
                      <img src={TShirtIcon} width="30" />
                    </div>
                    <div className="align-self-center mx-3 my-0">
                      T-Shirt
                    </div>
                  </div>
                  <div className="col-2 row justify-content-center ml-0 mr-0 my-0 px-3 py-3 pa-favourite-card">
                    <div>
                      <img src={ShirtIcon} width="30" />
                    </div>
                    <div className="align-self-center mx-3 my-0">
                      Shirt
                    </div>
                  </div>
                  <div className="col-2 row justify-content-center ml-0 mr-0 my-0 px-3 py-3 pa-favourite-card">
                    <div>
                      <img src={JacketIcon} width="30" />
                    </div>
                    <div className="align-self-center mx-3 my-0">
                      Jacket
                    </div>
                  </div>
                  <div className="col-2 row justify-content-center ml-0 mr-0 my-0 px-3 py-3 pa-favourite-card">
                    <div>
                      <img src={PantsIcon} width="30" />
                    </div>
                    <div className="align-self-center mx-3 my-0">
                      Pants
                    </div>
                  </div>
                  <div className="col-2 row justify-content-center ml-0 mr-0 my-0 px-3 py-3 pa-favourite-card">
                    <div>
                      <img src={ShoesIcon} width="30" />
                    </div>
                    <div className="align-self-center mx-3 my-0">
                      Shoes
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block px-3 pt-3 pb-1 px-md-0 pt-md-4 pb-md-2">
                <img src={Newsletter} width="100%" alt="Newsletter Banner" style={{borderRadius: 5}} />
              </div>
            </div>
          </div>



          {/* FLASH SALE SECTION */}
          {/* Mobile Section */}
          <div className="d-block d-md-none">
            <div className="px-0 py-0 pa-bg-main-light">
              <div className="container px-3 py-3">
                <div>
                  <span>
                    <img src={FlashIcon} width="35" style={{marginTop: -14, marginBottom: 0}} />
                  </span>
                  <span className="mx-3 my-0 pa-font-size-30 pa-light">
                    Flash Sale
                  </span>
                </div>
                <div className="pt-3 pb-3">
                  <Slider {...mobileSettings}>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6328992/marhen-j_marhen-j-rico-mini-tas-wanita---jester-red_full03.jpg?output-format=webp" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/ehUIYiPQxlq_gU8VtaGpqF4W4l8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6328992/marhen-j_marhen-j-rico-mini-tas-wanita---jester-red_full03.jpg?output-format=webp" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6328992/marhen-j_marhen-j-rico-mini-tas-wanita---jester-red_full03.jpg?output-format=webp" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6328992/marhen-j_marhen-j-rico-mini-tas-wanita---jester-red_full03.jpg?output-format=webp" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6328992/marhen-j_marhen-j-rico-mini-tas-wanita---jester-red_full03.jpg?output-format=webp" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>



          {/* Desktop Section */}
          <div className="d-none d-md-block">
            <div className="px-0 pa-bg-main-light">
              <div className="container px-0 py-3">
                <div>
                  <span>
                    <img src={FlashIcon} width="35" style={{marginTop: -14, marginBottom: 0}} />
                  </span>
                  <span className="mx-3 my-0 pa-font-size-30 pa-light">
                    Flash Sale
                  </span>
                </div>
                <div className="pt-3 pb-3">
                  <Slider {...desktopSettings}>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 py-0">
                      <div>
                        <img src="https://dynamic.zacdn.com/1j1M9PhuhmK0IMKMh2H4Mka8Vzk=/fit-in/692x1000/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bombboogie-1008-4945181-3.jpg" width="100%" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
                        <div className="px-3 py-4 pa-bg-light" style={{width: "100%", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                          <p className="pa-font-size-16">
                            MARHEN J Rico Mini Tas...
                          </p>
                          <p className="font-weight-bold pa-font-size-16 pa-secondary">
                            Rp.1.019.000
                          </p>
                          <div className="progress mx-0 my-2" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="pa-font-size-12 pa-dark-grey" style={{marginTop: -6}}>
                            Stock Tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>



          {/* BEST SELLER SECTION */}
          <div>
            <div className="container px-3 pt-0 pb-5 px-md-0 pt-md-0 pb-md-5">
              <div className="px-0 pt-3 pb-0">
                <h3>
                  Rekomendasi Untuk Kamu
                </h3>
              </div>
              {
                this.state.data?
                  <div className="row">
                    {this.mapRecomendedProduct()}
                  </div>
                :
                  <RecomendedProductLoading />
              }
            </div>
          </div>



          {/* LOAD MORE SECTION */}
          <div>
            <div className="container px-3 pt-0 pb-5 px-md-0 pt-md-0 pb-md-5">
              <div className="row justify-content-center">
                <div onClick={() => this.showMoreProducts()} className="btn px-5 py-2 font-weight-bold pa-button-load-more pa-main-light" style={{borderRadius: 10}}>
                  Load More
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default LandingPage