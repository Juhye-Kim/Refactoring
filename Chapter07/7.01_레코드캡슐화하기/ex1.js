const organization = { name: "애크미 구스베리", country: "GB" };

function getRawDataOfOrganization() {
  return organization;
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // read
getRawDataOfOrganization().name = newName; // write
