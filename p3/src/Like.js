// /src/like.js
export default class Like {

    /**
     *
     */
    constructor() {
        // Extract JSON like string from local storage
        let like = localStorage.getItem('like');

        // Parse JSON like String to `items` object
        this.items = (like) ? JSON.parse(like) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the like
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates like in localstorage
     */
    update() {
        localStorage.setItem('like', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given albumId
     */
    add(albumId, quantity = 1) {

        // First see if album is already present
        this.items.push({
                id: albumId,
                quantity: quantity
            });

        this.update();
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
