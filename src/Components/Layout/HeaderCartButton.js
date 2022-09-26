import React ,{useContext} from "react";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/Cart-Context";


const HeaderCartButton=(props)=>{
    const ctx = useContext(CartContext);

    return(
    <button className={classes.button} onClick ={props.onClickButton}>
        <span className={classes.icon}>
            <CartIcon /> </span>
        <span> Your Cart </span>
        <span className={classes.badge}>  3 </span>
    </button>)

}

export default HeaderCartButton;