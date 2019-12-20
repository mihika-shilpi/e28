// /src/favourite.js
export default class Favourite {

    /**
     *
     */
    constructor() {
        // Extract JSON favourite string from local storage
        let favourite = localStorage.getItem('favourite');

        // Parse JSON favourite String to `items` object
        this.items = (favourite) ? JSON.parse(favourite) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the favourite
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates favourite in localstorage
     */
    update() {
        localStorage.setItem('favourite', JSON.stringify(this.items))
    }


    /**
     * Remove an item from items via albumId
     */
    remove(albumId) {
        let item = this.getItem(albumId);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via albumId
     * Returns null if album does not exist in items
     */
    getItem(albumId) {
        return this.items.find(({ id }) => id === albumId) || null;
    }
}
