document.addEventListener('DOMContentLoaded', () => {
    const inputQuantity = document.querySelector('.input-quantity');
    const btnIncrement = document.querySelector('#increment');
    const btnDecrement = document.querySelector('#decrement');
    const btnClean = document.querySelector('.btn-clean');
    let valueByDefault = parseInt(inputQuantity.value);

    // Funciones de click para incrementar y decrementar
    btnIncrement.addEventListener('click', () => {
        valueByDefault += 1;
        inputQuantity.value = valueByDefault;
    });

    btnDecrement.addEventListener('click', () => {
        if (valueByDefault === 1) {
            return;
        }
        valueByDefault -= 1;
        inputQuantity.value = valueByDefault;
    });

    // Función de click para limpiar las opciones seleccionadas
    btnClean.addEventListener('click', () => {
        document.querySelectorAll('select').forEach(select => {
            select.value = "";
        });
    });

    // Constantes toggle titles
    const toggleDescription = document.querySelector('.title-description');
    const toggleAdditionalInformation = document.querySelector('.title-additional-information');
    const toggleReviews = document.querySelector('.title-reviews');

    // Constantes toggle text
    const contentDescription = document.querySelector('.text-description');
    const contentAdditionalInformation = document.querySelector('.text-additional-information');
    const contentReviews = document.querySelector('.text-reviews');

    // Funciones toggle
    toggleDescription.addEventListener('click', () => {
        contentDescription.classList.toggle('hidden');
    });

    toggleAdditionalInformation.addEventListener('click', () => {
        contentAdditionalInformation.classList.toggle('hidden');
    });

    toggleReviews.addEventListener('click', () => {
        contentReviews.classList.toggle('hidden');
    });
});
