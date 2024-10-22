const Biblio = require("./constructor.js")

function splice(start, deleteCount = this.length, ...items) {
    // Handle negative start index
    if (start < 0) start = Math.max(start + this.length, 0)

    // Handle cases where start is greater than the array length
    if (start > this.length) start = this.length

    // Handle cases where deleteCount is negative
    deleteCount = Math.max(deleteCount, 0)

    // Calculate the end index for slicing
    let end = Math.min(start + deleteCount, this.length)

    // Create an array for removed elements
    let removedItems = new Biblio()
    for (let i = start; i < end; i++) {
        removedItems[i - start] = this[i]
        removedItems.length++
    }

    // Calculate the number of elements to keep
    const keepLength = Math.max(start, this.length - deleteCount)

    // Move elements after the splicing position to their new positions
    for (let i = this.length - 1; i >= start + deleteCount; i--) {
        if (i + items.length < this.length) {
            this[i + items.length] = this[i]
        }
    }

    // Insert new items into the array
    for (let i = 0; i < items.length; i++) {
        this[start + i] = items[i]
    }

    // Remove the trailing elements that are now beyond the new length
    for (let i = keepLength + items.length; i < this.length; i++) {
        this[i] = undefined
    }

    // Adjust the length of the array
    this.length = keepLength + items.length

    return removedItems
}

module.exports = splice