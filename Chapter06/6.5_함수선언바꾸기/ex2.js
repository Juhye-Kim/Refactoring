class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservations(customer, false);
  }

  zz_addReservations(customer, isPriority) {
    // 새로 추가한 매개변수 실제 사용하는지 확인
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
