import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { ApiUrl } from '../../Constant/ApiUrl'
import './Cart.css'
import { CardCart } from './CartComponent/CardCart'

const Cart = () => {

    const [data, setData] = useState(null)
    const [mapData, setMapData] = useState({
        subtotal : null,
        total_discount : null,
        ongkir : null
    })
    const [dataOngkir, setDataOngkir] = useState({
        gudangAsal : null,
        addressUser : null,
        ongkirRate : null
    })

    useEffect(() => {
        getDataCart()
        getEstOngkir()
    }, [])

    useEffect(() => {
        mapDataToRender()
    },[data])

    const getDataCart = () => {
        let token = localStorage.getItem('token')
        console.log(token)
        Axios.post(ApiUrl + 'products/cart', {token : token})
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                setData(res.data.cartData)
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const mapDataToRender = () => {
        let subtotal = 0
        let total_discount = 0
        if(data !== null){
            data.forEach((val, i) => {
                subtotal += val.total_price
                total_discount += val.total_potongan
            })
        }
        setMapData({...mapData, subtotal : subtotal, total_discount : total_discount})
    }

    const getEstOngkir = () => {
        let data = {
            token : localStorage.getItem('token'),
            weight : 1700,
            courier : 'jne'
        }

        Axios.post(ApiUrl + 'products/estimated-ongkir/all', data)
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                let estTermurah = res.data.dataOngkir[0].costs.map((val, i) => {
                    return {ongkir : val.cost[0].value, est : val.cost[0].etd}
                })
                setDataOngkir({...dataOngkir, gudangAsal : res.data.dataGudang, addressUser : res.data.dataUser, ongkirRate : estTermurah.sort((a, b) => b.ongkir - a.ongkir)})
                
            } catch (error) {
                console.log(error)
            }
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    console.log(dataOngkir)
    return (
        <div className='container' style={{paddingTop : 120}}>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='border-bottom row pt-2 pb-2 pl-1'>
                        <p>Your Cart(2)</p>
                    </div>
                    <div style={{marginTop : 20}} className='pl-2 pr-2'>
                        {
                            data && data.map((val,i) => {
                                return(
                                    <CardCart 
                                    price={val.price} 
                                    brand={val.brands_name}
                                    productName={val.name}
                                    discount={val.discount}
                                    qty={val.qty}
                                    size={val.size}
                                    image={val.url}
                                    stock={val.stock}
                                    est={dataOngkir.ongkirRate && dataOngkir.ongkirRate[0].est.split('-')[1]}
                                    cityGudang={dataOngkir.gudangAsal && dataOngkir.gudangAsal.city_gudang}
                                     />

                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-md-4 p-3'>
                    <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginBottom : 20}}>
                        <p>Cart Summary</p>
                    </div>
                    <div className='pl-3 pr-3'>
                        <div className='row border pt-3 pb-3'>
                            <div className='col-md-6 ' style={{display : 'flex', flexDirection : 'column'}}>
                                <p style={{fontSize : 14}}>Subtotal</p>
                                <p style={{fontSize : 14}}>Est. Shipping</p>
                                <p style={{fontSize : 14}}>Discount</p>
                                <p style={{fontSize : 14, marginTop : 10}}>Total</p>
                            </div>
                            <div className='col-md-6 ' style={{display : 'flex', flexDirection : 'column', alignItems : 'flex-end'}}>
                                <p style={{fontSize : 14}}>Rp. {mapData.subtotal && mapData.subtotal.toLocaleString('id-ID') }</p>
                                <p style={{fontSize : 14}}>Rp. {dataOngkir.ongkirRate && (dataOngkir.ongkirRate[0].ongkir).toLocaleString('id-ID')}</p>
                                <p style={{fontSize : 14}}>(Rp. {mapData.total_discount && mapData.total_discount.toLocaleString('id-ID')})</p>
                                <p style={{fontSize : 14, marginTop : 10}}>Rp. {mapData.subtotal && mapData.total_discount && dataOngkir.ongkirRate && ((mapData.subtotal + dataOngkir.ongkirRate[0].ongkir) - mapData.total_discount ).toLocaleString('id-ID')}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop : 20}}>
                        <div className='border pt-2 pb-2' style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                            <p>Checkout</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
