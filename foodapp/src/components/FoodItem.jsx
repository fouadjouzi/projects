import styles from './fooditem.module.css'; // Import CSS module for styling

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      {/* Container for each food item with a specific style */}
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      {/* Image of the food item with specific styling */}

      <div className={styles.itemContent}>
        {/* Container for the food item content (e.g., title) with specific styling */}
        <p className={styles.itemName}>{food.title}</p>
        {/* Food item title with specific styling */}
      </div>

      <div className={styles.buttonContainer}>
        {/* Container for the button with specific styling */}
        <button
          onClick={() => {
            console.log(food.id);
            // When the button is clicked, log the food item ID to the console
            setFoodId(food.id);
            // Update the state in the parent component to indicate the selected food item ID
          }}
          className={styles.itemButton}
          // Apply specific styling to the button
        >
          view Recipe
          {/* Text displayed on the button */}
        </button>
      </div>
    </div>
  );
}
