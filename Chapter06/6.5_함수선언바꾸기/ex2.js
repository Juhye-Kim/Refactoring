class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservations(customer);
  }

  zz_addReservations(customer) {
    this._reservations.push(customer);
  }
}
