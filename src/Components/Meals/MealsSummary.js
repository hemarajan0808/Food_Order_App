import react from "react";
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Deleivered to you!!!!</h2>

      <p>
        Chhose your favourite Meal from our broad selection of available meals
        and enjoy a delicious luch at home for dinner or lunch .
      </p>

      <p>
        all our meals are cooked with high-quality ingredients just-in-time and
        ofcourse by our experienced chefs!!!
      </p>
    </section>
  );
};

export default MealsSummary;
