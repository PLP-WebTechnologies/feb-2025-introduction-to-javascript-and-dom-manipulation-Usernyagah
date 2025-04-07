// Change text content dynamically
function changeText() {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.textContent = 'Text changed at: ' + new Date().toLocaleTimeString();
}

// Toggle CSS styles
function toggleStyle() {
    const styleBox = document.getElementById('styleBox');
    styleBox.style.backgroundColor = styleBox.style.backgroundColor === 'orange' ? '#4CAF50' : 'orange';
    styleBox.style.transform = styleBox.style.transform === 'rotate(5deg)' ? 'rotate(-5deg)' : 'rotate(5deg)';
}

// Add new element
function addElement() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New item ' + (itemList.children.length + 1);
    itemList.appendChild(newItem);
}

// Remove last element
function removeElement() {
    const itemList = document.getElementById('itemList');
    if (itemList.children.length > 0) {
        itemList.lastChild.remove();
    }
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Add initial items
    const itemList = document.getElementById('itemList');
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = 'Item ' + i;
        itemList.appendChild(li);
    }
});
