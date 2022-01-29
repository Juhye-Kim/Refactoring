class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses;
  }

  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;
