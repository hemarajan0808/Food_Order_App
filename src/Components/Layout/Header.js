import React, {Fragment} from "react";
import mealsImage from '../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header =(props)=>{
    return <Fragment>
        <header className ={classes.header}>
            <h1> React Meals </h1>
            <HeaderCartButton onClickButton={props.onShowCart} />
        </header>

        <div className={classes['main-image']}>
        <img src={mealsImage} alt="A Table Of Delicious Food"/>
        </div>

    </Fragment>

}

export default Header;