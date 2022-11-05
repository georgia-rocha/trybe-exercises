const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const name = order['name'];
    const phoneNumber = order['phoneNumber'];
    const address = 'address';
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
    const deliveryPerson = order.order.delivery.deliveryPerson;

    console.log(`Olá, ${deliveryPerson},\nentrega para: ${name}, Telefone: ${phoneNumber}, Rua ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
    const newName = order.name = 'Luiz Silva';
    const newValue = order.order.payment = 50;
    const newDrink = order.order.drinks.coke.type;
    const pizzas = Object.keys(order.order.pizza);

    console.log(`Olá ${newName},\no total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${newDrink} é R$ ${newValue},00.`);

}

orderModifier(order);