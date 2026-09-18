// Récupérer tous les produits
const products = document.querySelectorAll(".card");
// Récupérer l'affichage du prix total
const totalElement = document.querySelector(".total");

// FONCTION : CALCULER LE PRIX TOTAL

function updateTotal() {
  let total = 0;
  // Parcourir tous les produits
  products.forEach((product) => {
    // Récupérer le prix unitaire
    const unitPriceElement = product.querySelector(".unit-price");
    // Récupérer la quantité
    const quantityElement = product.querySelector(".quantity");
    // Vérifier que les éléments existent
    if (unitPriceElement && quantityElement) {
      // Transformer "100 $" en nombre 100
      const unitPrice = parseFloat(unitPriceElement.innerText);
      // Transformer la quantité en nombre
      const quantity = parseInt(quantityElement.innerText);
      // Ajouter prix × quantité au total
      total += unitPrice * quantity;
    }
  });
  // Afficher le total
  totalElement.innerText = `${total} $`;
}

// BOUTON +

products.forEach((product) => {
  const plusButton = product.querySelector(".fa-plus-circle");
  const quantityElement = product.querySelector(".quantity");
  if (plusButton && quantityElement) {
    plusButton.addEventListener("click", () => {
      // Récupérer la quantité actuelle
      let quantity = parseInt(quantityElement.innerText);
      // Ajouter 1
      quantity++;
      // Afficher la nouvelle quantité
      quantityElement.innerText = quantity;
      // Recalculer le prix total
      updateTotal();
    });
  }
});

// BOUTON -

products.forEach((product) => {
  const minusButton = product.querySelector(".fa-minus-circle");
  const quantityElement = product.querySelector(".quantity");
  if (minusButton && quantityElement) {
    minusButton.addEventListener("click", () => {
      // Récupérer la quantité actuelle
      let quantity = parseInt(quantityElement.innerText);
      // Éviter une quantité négative
      if (quantity > 0) {
        quantity--;
        // Afficher la nouvelle quantité
        quantityElement.innerText = quantity;
        // Recalculer le prix total
        updateTotal();
      }
    });
  }
});

// BOUTON SUPPRIMER

products.forEach((product) => {
  const deleteButton = product.querySelector(".fa-trash-alt");
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      // Supprimer le produit de la page
      product.remove();
      // Recalculer le prix total
      updateTotal();
    });
  }
});

// BOUTON COEUR

products.forEach((product) => {
  const heartButton = product.querySelector(".fa-heart");
  if (heartButton) {
    heartButton.addEventListener("click", () => {
      // Ajouter / retirer la classe "liked"
      heartButton.classList.toggle("liked");
      // Changer la couleur du cœur
      if (heartButton.classList.contains("liked")) {
        heartButton.style.color = "red";
      } else {
        heartButton.style.color = "black";
      }
    });
  }
});

// CALCUL INITIAL
updateTotal();
