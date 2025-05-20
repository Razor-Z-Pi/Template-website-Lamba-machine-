const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

document.getElementById('order-action').addEventListener('click', function () {
  const fields = [
    { element: carField, validator: (value) => value.trim() !== '' },
    { element: nameField, validator: (value) => value.trim() !== '' },
    {
      element: phoneField,
      validator: (value) => {
        // Удаляем все нецифровые символы
        const digitsOnly = value.replace(/\D/g, '');
        return digitsOnly.length >= 10;
      },
    },
  ];

  let hasError = false;

  fields.forEach(({ element, validator }) => {
    const isValid = validator(element.value);

    if (!isValid) {
      element.style.borderColor = 'red';
      hasError = true;
    } else {
      element.style.borderColor = 'white';
    }
  });

  if (!hasError) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами');
    fields.forEach(({ element }) => {
      element.value = '';
      element.style.borderColor = 'white';
    });
  }
});
