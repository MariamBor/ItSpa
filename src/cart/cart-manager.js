// cart-manager.js

const key = "it-spa-cart";

export const cartManager = {
  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: {
          price: item.price,
          quantity: 1,
          dates: [
            {
              arrivalDate: item.arrivalDate,
              departureDate: item.departureDate,
            },
          ],
        },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += 1;
        content[item.name].dates = content[item.name].dates.concat({
          arrivalDate: item.arrivalDate,
          departureDate: item.departureDate,
        });
      } else {
        const newItem = {
          [item.name]: {
            price: item.price,
            quantity: 1,
            dates: [
              {
                arrivalDate: item.arrivalDate,
                departureDate: item.departureDate,
              },
            ],
          },
        };

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
        } else {
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
    } else {
      const content = JSON.parse(cart);

      // entry to jest [KLUCZ, WARTOSC]
      return Object.entries(content).map((entry) => {
        const [itemName, itemDetails] = entry;

        return {
          name: itemName,
          price: itemDetails.price,
          quantity: itemDetails.quantity,
          dates: itemDetails.dates,
        };
      });
    }
  },

  getTotalDays: function (item) {
    const dates = item.dates;
    let totalDays = 0;
    if (dates) {
      totalDays = dates.reduce((totalDays, dateRange) => {
        const arrivalDate = new Date(dateRange.arrivalDate);
        const departureDate = new Date(dateRange.departureDate);
        const timeDiff = Math.abs(
          departureDate.getTime() - arrivalDate.getTime()
        );
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return totalDays + diffDays;
      }, 0);
    }
    return totalDays || 1;
  },

  getItemPrice(item) {
    const itemTotalDays = this.getTotalDays(item);
    return item.price * itemTotalDays;
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return "0.00";
    } else {
      const content = JSON.parse(cart);

      return Object.values(content)
        .reduce((totalPrice, item) => {
          const itemTotalPrice = item.dates.reduce((sum, dateRange) => {
            const singleItem = {
              ...item,
              dates: [dateRange],
            };
            const priceForDateRange = this.getItemPrice(singleItem);
            return sum + priceForDateRange;
          }, 0);

          return totalPrice + itemTotalPrice;
        }, 0)
        .toFixed(2);
    }
  },
};
