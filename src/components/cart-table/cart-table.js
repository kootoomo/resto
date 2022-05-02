import React from 'react';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../actions';
import './cart-table.scss';

const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
            <div className="cart__item">
                <img src="https://static.1000.menu/img/content-v2/13/03/35503/saxarnaya-glazur-s-jelatinom-dlya-kulicha_1651039796_14_max.jpg" className="cart__item-img" alt="Easter Cake"></img>
                <div className="cart__item-title">"Easter Cake"</div>
                <div className="cart__item-price">12$</div>
                <div className="cart__close">&times;</div>
            </div>

                {/* {
                    items.map(item => {
                        const {title, price, url, id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                } */}
                
            </div>
        </>
    );
};


const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps) (CartTable);