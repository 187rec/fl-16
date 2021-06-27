const appRoot = document.getElementById('app-root');

document.body.onload = () => {
  createTitle();
  createForm();
  createTable();
};

function createTitle() {
  appRoot.innerHTML = '<div><h1>Countries Search</h1></div>';
}

function createForm() {
  let searchForm = document.createElement('form');
  searchForm.innerHTML =
    '<p id="radioButtonForm">Please choose type of search</p>' +
    '<input type="radio" name="typeSearch" id="regionInput" value="radioRegion" onclick="optionList();">' +
    '<label for="regionInput">By Region</label>' +
    '<input type="radio" name="typeSearch" id="languageInput" value="radioLanguage" onclick="optionList();">' +
    '<label for="languageInput">By Language</label>' +
    '<p id="listForm">Please choose search query</p>' +
    '<select id="selectId"> <option id="selectOption" value="selectValue">Select value</option>';

  appRoot.appendChild(searchForm);
}

function createTable() {
  let table = document.createElement('table');
  table.id = 'table';
  appRoot.appendChild(table);
}

function optionList() {
  const selectedOpt = document.querySelector('input[name="typeSearch"]:checked').value;
  const generateList = (arr) => arr.reduce((buf, el) => buf + `<option value="${el}">${el}</option>`, '');

  const isRegion = selectedOpt === 'radioRegion';
  const select = document.getElementById('selectId');

  select.innerHTML = isRegion
    ? generateList(externalService.getRegionsList())
    : generateList(externalService.getLanguagesList());

  select.onchange = function () {
    console.log(this.value);
    fillTable(
      isRegion
        ? externalService.getCountryListByRegion(this.value)
        : externalService.getCountryListByLanguage(this.value)
    );
  }
}

function fillTable(selectedList) {
  const listInnerHtml = selectedList.map((country) => {
    return `
      <tr class="table-row">
      <td class="table-row-item">${country.name}</td>
      <td class="table-row-item">${country.capital}</td>
      <td class="table-row-item">${country.region}</td>
      <td class="table-row-item">${Object.values(country.languages).join(`, `)}</td>
      <td class="table-row-item">${country.area}</td>
      <td class="table-row-item"><img src="${country.flagURL}"/></td>
      </tr>
       `
  }).join(``);

  document.getElementById('table').innerHTML = listInnerHtml;
}
