const itemsContainer = document.getElementById("items");
const listItemForm = document.getElementById("list-item-form");
const purchaseItemForm = document.getElementById("purchase-item-form");

class Item {
  constructor(name, price, seller) {
    this.name = name;
    this.price = price;
    this.seller = seller;
  }
}

class Market {
  constructor() {
    this.items = [];
  }

  listItem(name, price, seller) {
    const item = new Item(name, price, seller);
    this.items.push(item);
    this.renderItems();
  }

  purchaseItem(name, buyer) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        console.log(
          `${buyer} has purchased ${this.items[i].name} from ${this.items[i].seller} for $${this.items[i].price}`
        );
        this.items.splice(i, 1);
        this.renderItems();
        return;
      }
    }
    console.log("Item not found");
  }

  renderItems() {
    itemsContainer.innerHTML = "";
  }
}
