document.addEventListener('DOMContentLoaded', () => {
    // --- Исходные данные ---
    // В реальном приложении эти данные могут приходить с сервера
    // Структура обновлена для поддержки вариантов (дозировок)
    const availableProducts = [
        {
            id: 1, name: 'Acetic Acid 0.6%', variants: [
                { id: '1-10', dosage: 'шише 10 ml', price: 40.00 },
                { id: '1-1', dosage: '1 ml', price: 5.00 }
            ]
        },
        {
            id: 2, name: '5-Amino-1MQ', variants: [
                { id: '2-50', dosage: 'шише 50 mg', price: 200.00 },
                { id: '2-5', dosage: '5 mg', price: 25.00 },
                { id: '2-1', dosage: '1 mg', price: 16.00 },
                { id: '2-05', dosage: '0.5 mg', price: 5.00 },
            ]
        },
        {
            id: 3, name: 'AOD-9604 + Acetic Acid 0.6%', variants: [
                { id: '3-5', dosage: 'шише 5 mg', price: 160.00 },
                { id: '3-1', dosage: '1 mg', price: 40.00 },
                { id: '3-05', dosage: '0.5 mg', price: 24.00 },
                { id: '3-01', dosage: '0.1 mg', price: 6.00 },
            ]
        },
        { id: 4, name: 'Basteriostatic Water', variants: [
            { id: '4-10', dosage: 'шише 10 ml', price: 30.00 },
            { id: '4-1', dosage: '1 ml', price: 4.00 }
        ] },
        { id: 5, name: 'BPC-157', variants: [
            { id: '5-5', dosage: 'шише 5 mg', price: 120.00 },
            { id: '5-1', dosage: '1 mg', price: 30.00 },
            { id: '5-05', dosage: '0.5 mg', price: 18.00 },
            { id: '5-01', dosage: '0.1 mg', price: 6.00 },
        ] }
    ];
    const productsMap = new Map(availableProducts.map(p => [p.id, p]));

    // --- Получение элементов DOM ---
    const addProductBtn = document.getElementById('addProductBtn');
    const productItemsContainer = document.getElementById('product-items');
    const productRowTemplate = document.getElementById('product-row-template');
    const totalSumEl = document.getElementById('totalSum');
    const printBtn = document.getElementById('printBtn');
    const orderForm = document.getElementById('orderForm');
    const orderDateInput = document.getElementById('orderDate');

    // --- Функции ---

    // Устанавливает сегодняшнюю дату по умолчанию
    const setTodaysDate = () => {
        const today = new Date().toISOString().split('T')[0];
        if (!orderDateInput.value) {
            orderDateInput.value = today;
        }
    };

    // Расчет общей суммы
    const calculateTotal = () => {
        let total = 0;
        const productRows = productItemsContainer.querySelectorAll('.product-row');
        productRows.forEach(row => {
            const quantity = parseFloat(row.querySelector('.product-quantity').value) || 0;
            const price = parseFloat(row.querySelector('.product-price').textContent) || 0;
            total += quantity * price;
        });
        totalSumEl.textContent = `${total.toFixed(2)} лв.`;
    };

    // Расчет суммы для одной строки
    const calculateRowSum = (productRow) => {
        const quantity = parseFloat(productRow.querySelector('.product-quantity').value) || 0;
        const price = parseFloat(productRow.querySelector('.product-price').textContent) || 0;
        const rowSumEl = productRow.querySelector('.product-row-sum');
        const rowSum = quantity * price;
        rowSumEl.textContent = rowSum.toFixed(2);

        // После обновления суммы строки, пересчитываем общую сумму
        calculateTotal();
    };

    // Обновление цены на основе выбранного варианта
    const updatePrice = (productRow) => {
        const productId = parseInt(productRow.querySelector('.product-select').value, 10);
        const variantId = productRow.querySelector('.product-variant').value;
        const priceEl = productRow.querySelector('.product-price');

        if (!productId || !variantId) {
            priceEl.textContent = '0.00';
            calculateRowSum(productRow); // Обнуляем сумму строки и общую
            return;
        }

        const product = productsMap.get(productId);
        const variant = product.variants.find(v => v.id === variantId);

        if (variant) {
            priceEl.textContent = variant.price.toFixed(2);
        } else {
            priceEl.textContent = '0.00';
        }
        calculateRowSum(productRow); // Пересчитываем сумму строки
    };

    // Заполнение выпадающего списка дозировок для товара, выбранного в product-select
    const populateVariants = (productRow) => {
        const productId = parseInt(productRow.querySelector('.product-select').value, 10);
        const product = productsMap.get(productId);
        const variantSelect = productRow.querySelector('.product-variant');
        variantSelect.innerHTML = ''; // Очищаем старые опции

        if (product && product.variants) {
            product.variants.forEach(variant => {
                const option = document.createElement('option');
                option.value = variant.id;
                option.textContent = variant.dosage;
                variantSelect.appendChild(option);
            });
            variantSelect.disabled = false;
        } else {
            variantSelect.disabled = true;
        }
        updatePrice(productRow);
    };

    // Заполнение списка товаров с учетом фильтра
    const populateProducts = (productRow, filter = '') => {
        const select = productRow.querySelector('.product-select');
        const currentId = select.value; // Сохраняем текущий выбор
        select.innerHTML = '';
        filter = filter.toLowerCase();

        availableProducts.forEach(product => {
            if (product.name.toLowerCase().includes(filter)) {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                select.appendChild(option);
            }
        });

        // Пытаемся восстановить выбор, если он еще есть в списке
        if (Array.from(select.options).some(opt => opt.value === currentId)) {
            select.value = currentId;
        }

        populateVariants(productRow);
    };

    // Добавление новой строки товара
    const addProductRow = () => {
        const templateContent = productRowTemplate.content.cloneNode(true);
        const newRow = templateContent.querySelector('.product-row');
        const filterInput = newRow.querySelector('.product-filter');
        const productSelect = newRow.querySelector('.product-select');
        const variantSelect = newRow.querySelector('.product-variant');

        // Добавляем обработчики событий для новой строки
        filterInput.addEventListener('input', () => populateProducts(newRow, filterInput.value));
        productSelect.addEventListener('change', () => populateVariants(newRow));
        variantSelect.addEventListener('change', () => updatePrice(newRow)); // updatePrice вызовет calculateRowSum
        newRow.querySelector('.product-quantity').addEventListener('input', () => calculateRowSum(newRow));
        newRow.querySelector('.remove-product-btn').addEventListener('click', () => {
            newRow.remove();
            calculateTotal();
        });

        productItemsContainer.appendChild(newRow);
        populateProducts(newRow); // Заполняем список товаров при создании строки
    };

    // --- Обработчики событий ---
    addProductBtn.addEventListener('click', addProductRow);

    printBtn.addEventListener('click', () => {
        // Простая проверка на заполненность формы
        if (orderForm.checkValidity()) {
            window.print();
        } else {
            // Сообщаем пользователю о необходимости заполнить все поля
            alert('Моля, попълнете всички задължителни полета.');
            orderForm.reportValidity(); // Подсветит незаполненные поля
        }
    });

    // --- Инициализация ---
    setTodaysDate();
    addProductRow(); // Добавляем одну строку товара при загрузке страницы
});
