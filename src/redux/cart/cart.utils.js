export function addItemToCart(cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // adding existing item + 1 quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // create item + its quantity
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export function removeItemToCart(cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  // remove the item when 0
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cItem => cItem.id !== cartItemToRemove.id);
  }

  // decrease the qty
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}
