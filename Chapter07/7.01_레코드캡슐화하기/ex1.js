const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

result += `<h1>${getOrganization().name}</h1>`; // read
getOrganization().name = newName; // write
