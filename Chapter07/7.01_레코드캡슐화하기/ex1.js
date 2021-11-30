const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString) {
    this._name = aString;
  }
}

result += `<h1>${getOrganization().name}</h1>`; // read
getOrganization().name = newName; // write
