document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityInput = document.getElementById('quantity-input');
    const alertBtn = document.getElementById('alert-btn');

    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    alertBtn.addEventListener('click', function() {
        Swal.fire("Producto agregado exitosamente!");
    });
});