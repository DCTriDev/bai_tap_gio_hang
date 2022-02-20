import React, {Component} from 'react';

class ProductDetail extends Component {
    renderTablePhone = () => {
        let {hinhAnh, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan,} = this.props.phoneDetail;
        return (
            <tr className="row d-flex align-items-center">
                <td className="col-3 border-0">
                    <img src={hinhAnh} alt="" style={{height: "10em"}}/>
                    <p>Tên Sản Phẩm: <b>{tenSP}</b></p>
                </td>
                <td className="col-9">
                    <tr className="d-flex justify-content-center">
                        <p>Màn hình: {manHinh}</p>
                    </tr>
                    <tr className="d-flex justify-content-center">
                        <p>Hệ điều hành: {heDieuHanh}</p>
                    </tr>
                    <tr className="d-flex justify-content-center">
                        <p>Camera trước: {cameraTruoc}</p>
                    </tr>
                    <tr className="d-flex justify-content-center">
                        <p>Camera sau: {cameraSau}</p>
                    </tr>
                    <tr className="d-flex justify-content-center">
                        <p>RAM: {ram}</p>
                    </tr>
                    <tr className="d-flex justify-content-center">
                        <p>ROM: {rom}</p>
                    </tr>
                    <tr className="d-flex justify-content-center">
                        <p>Giá bán: {giaBan}</p>
                    </tr>
                </td>
            </tr>
        );
    };

    render() {
        return (
            <div className="container text-center">
                <br/><br/>
                <h2 className="">Chi tiết sản phẩm</h2>
                <table className="table">
                    <thead>
                        <tr className="row">
                            <th className="col-3">Hình ảnh</th>
                            <th className="col-9">Thông số kỹ thuật</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTablePhone()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductDetail;