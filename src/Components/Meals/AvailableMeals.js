import React,{useEffect, useState} from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



/* const DummyData = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest Fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Green Bowl",
    description: "Healthy and Green ",
    price: 15.99,
  },

  {
    id: "m3",
    name: "Pizza",
    description: "American Pizza",
    price: 12.99,
  },

  {
    id: "m4",
    name: "Barbeque Burger",
    description: "American, Raw, Meaty",
    price: 10.99,
  },
]; */

const AvailableMeals = () => {
  const [meals, setMeals]= useState([]);
  useEffect( ()=>{
    const fetchMeals = async ()=>{
      const response = await fetch('https://react-http-practice-42803-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals =[];

      for(const key in responseData ){
        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description: responseData[key].description,
          price:responseData[key].price
        })
      }
      setMeals(loadedMeals)
    }
    fetchMeals();
    
  }, []);

  const mealList = meals.map((meal) => (
    <MealItem
      id ={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
