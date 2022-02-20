import React, {Component} from 'react';
import {Button, Modal} from "antd";

class ModalCart extends Component {
    state = {
        isShow: false,
    };
    setVisible = (param) => {
        this.setState({isShow: param});
    };

    renderPhone = (phoneArr) => {
        return phoneArr.map((item, index) => {
            return (
                <tr key={index}>
                    <td scope="col">{item.maSP}</td>
                    <td scope="col">
                        <img src={item.hinhAnh} alt="" style={{width: "10em"}}/>
                    </td>
                    <td scope="col">{item.tenSP}</td>
                    <td scope="col">
                        <button type="button" className="btn btn-danger" onClick={() => {
                            this.props.changeAmount(item.maSP, "-");
                        }}>
                            -
                        </button>
                        {item.soLuong}
                        <button type="button" className="btn btn-success" onClick={() => {
                            this.props.changeAmount(item.maSP, "+");
                        }}>
                            +
                        </button>
                    </td>
                    <td scope="col">{item.giaBan}</td>
                    <td scope="col">{item.soLuong * item.giaBan}</td>
                    <td scope="col">
                        <button type="button" className="btn btn-danger" onClick={() => {
                            this.props.removeProduct(item.maSP);
                        }}>
                            Xóa
                        </button>
                    </td>
                </tr>
            );
        });
    };
    totalProduct = () => {
        return this.props.gioHang.reduce((total, item) => {
            return total + item.soLuong;
        }, 0);
    };

    render() {
        let gioHang = this.props.gioHang;
        return (
            <div>
                <div className="d-flex flex-row-reverse my-2">
                    <Button type="primary" onClick={() => this.setVisible(true)}>
                        Giỏ hàng ({this.totalProduct()})
                    </Button>
                </div>
                <Modal title="Giỏ Hàng Của Bạn Hiện Có" centered visible={this.state.isShow}
                       onOk={() => this.setVisible(false)} onCancel={() => this.setVisible(false)} width={1000}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Mã sản phẩm</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Thành tiền</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderPhone(gioHang)}</tbody>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default ModalCart;