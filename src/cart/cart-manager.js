// cart-manager.js

const key = 'it-spa-cart';

export const cartManager = {

  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1, dates: [item.arrivalDate, item.departureDate] }
      };
    }
    else {
      content = JSON.parse(cart);
      // np. { 'Pokój unarny': { price: 170, quantity: 2 } }
      
      // if (content.hasOwnProperty(item.name))
      if (item.name in content) {
        content[item.name].quantity += 1;
        content[item.name].dates.push(item.arrivalDate);
        content[item.name].dates.push(item.departureDate);
      }
      else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1, dates: [item.arrivalDate, item.departureDate] }
        };

        // doklada nowy wpis (klucz: wartosc) do obiektu `content`
        if (content) {
        Object.assign(content, newItem);
      } else {
        content = newItem;
      }
    }
  }
    
    localStorage.setItem(key, JSON.stringify(content));
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        }
        else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    }
    else {
      const content = JSON.parse(cart);

      // entry to jest [KLUCZ, WARTOSC]
      return Object.entries(content).map(entry => {
        const [itemName, itemDetails] = entry;

        return {
          name: itemName,
          price: itemDetails.price,
          quantity: itemDetails.quantity,
          dates: itemDetails.dates
        };
      });
    }
  },

  getTotalDays: function(item) {
    const dates = item.dates;
    let totalDays = 0;
    if (dates) {
      totalDays = dates.reduce((totalDays, date, index) => {
        if (index % 2 === 0) {
          const arrivalDate = new Date(Date.parse(date));
          const departureDate = new Date(Date.parse(dates[index+1]));
          const timeDiff = Math.abs(departureDate.getTime() - arrivalDate.getTime());
          const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          return totalDays + diffDays;
        }
        else {
          return totalDays;
        }
      }, 0);
    }
    return totalDays || 1;
  },


  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return '0.00';
    }
    else {
      const content = JSON.parse(cart);

      // [{ price, quantity }, { price, quantity },  { price, quantity }, ...]
      return Object
              .values(content)
              .reduce((totalPrice, item) => {
                const itemTotalDays = this.getTotalDays(item);
                return totalPrice + item.price * item.quantity * itemTotalDays;
              }, 0)
              .toFixed(2);
    }
  }


}