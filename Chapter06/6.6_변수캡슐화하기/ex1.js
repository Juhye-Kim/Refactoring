/**
 * 기본 캡슐화 기법
 *  -> 데이터 항목을 참조하는 부분만 캡슐화
 *  -> 변수에 담긴 내용 변경까지 제어하려면?!
 */

// 방법 1. 그 값을 바꿀 수 없게 만들기 (게터가 복제본을 반환)
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

// 방법 2. 레코드 캡슐화하기
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return new Person(defaultOwnerData);
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
