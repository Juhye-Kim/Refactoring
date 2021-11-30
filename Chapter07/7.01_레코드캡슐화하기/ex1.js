const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getRawDataOfOrganization() {
  return organization._data;
}

function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // read
getRawDataOfOrganization().name = newName; // write
