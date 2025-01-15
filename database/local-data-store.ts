import {Customer} from "../model/Customer";

const customers: Customer[] = [];

export function addCustomer(response: Customer) {
    customers.push(response);
}

export function getCustomers() {
    return customers;
}

export function deleteCustomer(id: string) {
    customers.splice(customers.findIndex(customer => customer.id === id), 1);
}

export function updateCustomer(id: string, customer: Customer) {
    customers[customers.findIndex(customer => customer.id === id)] = customer;
}
