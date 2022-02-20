import React, {Component} from "react";
import ListPhone from "./ListPhone";
import ProductDetail from "./ProductDetail";
import {phoneData} from "./phoneData";
import ModalCart from "./ModalCart";

class Cart extends Component {
    state = {
        phoneDetail: {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/applephone.jpg",
        },
        gioHang: [],
    };

    renderDetail = (phone) => {
        this.setState({
            phoneDetail: phone,
        });
    };

    changeAmount = (index, action) => {
        let newPhoneArr = [...this.state.gioHang];
        let indexProduct = this.state.gioHang.findIndex((item) => {
            return item.maSP === index;
        });
        if (indexProduct !== -1 && action == "+") {
            newPhoneArr[indexProduct].soLuong++;
        }
        if (indexProduct !== -1 && action == "-") {
            if (newPhoneArr[indexProduct].soLuong === 1) {
                newPhoneArr.splice(indexProduct, 1);
            } else {
                newPhoneArr[indexProduct].soLuong--;
            }
        }
        this.setState({
            gioHang: newPhoneArr,
        });
    };

    addPhone = (phone) => {
        let newPhoneArr = [...this.state.gioHang];
        let indexProduct = this.state.gioHang.findIndex((item) => {
            return item.maSP === phone.maSP;
        });
        if (indexProduct == -1) {
            phone.soLuong = 1;
            newPhoneArr.push(phone);
        }
        if (indexProduct !== -1) {
            newPhoneArr[indexProduct].soLuong++;
        }
        this.setState({
            gioHang: newPhoneArr,
        });
    };

    removeProduct = (indexSP) => {
        this.setState({
            gioHang: this.state.gioHang.filter((item) => {
                return item.maSP !== indexSP;
            }),
        });
    };

    render() {
        return (
            <div className="p-3">
                <ModalCart gioHang={this.state.gioHang} changeAmount={this.changeAmount}
                           removeProduct={this.removeProduct}/>
                <ListPhone dataPhone={phoneData} renderDetail={this.renderDetail} addPhone={this.addPhone}/>
                <ProductDetail phoneDetail={this.state.phoneDetail}/>
            </div>
        );
    }
}

export default Cart;