let cart = [];
        const cartContent = document.getElementById("cart-content");
        const totalPriceElement = document.getElementById("total-price");
        const cartItemsCount = document.getElementById("cart-items-count");
        const cartTotalPrice = document.getElementById("cart-total-price");
        
        function addToCart(name, price, image) {
            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }
            updateCart();
        }
        
        function updateCart() {
            cartContent.innerHTML = "";
            let total = 0;
            let itemCount = 0;
        
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                itemCount += item.quantity;
        
                cartContent.innerHTML += `
                    <div class="cart-box">
                        <img src="${item.image}" width="50" alt="${item.name}">
                        <div>
                            <h5>${item.name}</h5>
                            <p>₹${item.price} x ${item.quantity}</p>
                            <button onclick="removeFromCart(${index})">Remove</button>
                        </div>
                    </div>
                `;
            });
        
            totalPriceElement.textContent = `₹${total}`;
            cartTotalPrice.textContent = `₹${total}`;
            cartItemsCount.textContent = `${itemCount} Items`;
        }
        
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
        
        function toggleCart() {
            document.getElementById("cart").classList.toggle("open");
        }