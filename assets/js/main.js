//* We create the Vue application using the createApp method.
const { createApp } = Vue;

createApp({
  // We define the data that the application will use.
  data() {
    return {
      value: null, // value entered by user.
    };
  },

  computed: {
    // Computed property that calculates temperature conversions.
    results() {
      const value = parseFloat(this.value); //! Convert the entered value to a floating number.
      
      //! If the value entered is not a valid number (NaN), we return null
      if (isNaN(value)) {
        return null;
      }

      const celsius = value;
      
      // Calculate all conversions.
      return {
        Celsius: `${celsius.toFixed(2)} C`,
        Fahrenheit: `${((celsius * 1.8) + 32).toFixed(2)} F`,
        Kelvin: `${(celsius + 273.15).toFixed(2)} K`,
        Rankine: `${((celsius + 273.15) * 1.8).toFixed(2)} Ra`,
        Réaumur: `${(celsius * 0.8).toFixed(2)} Re`,
      };
    }
  }
}).mount('#temperature'); //* We mount the application on an element with id 'temperature'