
  let division = "./division.json";
  let district = "./district.json";
  let upazila = "./upazila.json";

  let divisionID = document.getElementById("divisionID");
  let districtID = document.getElementById("districtID");
  let upazilaID = document.getElementById("upazilaID");
  let placeDivision = document.getElementById("placeDivision");
  let form = document.getElementById("form");

  showDivision();
  function showDivision() {
    showDistrict();
    fetch(division)
      .then((res) => res.json())
      .then((data) =>
        Object.entries(data).forEach((division) => {
          let dv;
          dv += `<option>Select Division</option>`;
          division[1].forEach((div) => {
            dv += `<option value=${div.id}>${div.name}</option>`;
          });

          divisionID.innerHTML = dv;
        })
      );
  }
  function showDistrict() {
    showUpazila();
    divisionID.addEventListener("change", function (e) {
      fetch(district)
        .then((res) => res.json())
        .then((data) =>
          Object.entries(data).forEach((dist, index) => {
            let district;
            district += `<option>Select District</option>`;
            dist[1].forEach((dst) => {
              if (dst.division_id === e.target.value) {
                district += `<option value=${dst.id}>${dst.name}</option>`;
              }
            });
            districtID.innerHTML = district;
          })
        );
      placeDivision.innerHTML = e.target.selectedOptions[0].text;
      upazilaID.innerHTML = `<option>Select Upazila</option>`;
      placeDistrict.innerHTML = ""
      placeUpazila.innerHTML = ""
    });
  }
  function showUpazila() {
    districtID.addEventListener("change", function (e) {
      fetch(upazila)
        .then((res) => res.json())
        .then((data) =>
          Object.entries(data).forEach((up, index) => {
            let storeUp;
            storeUp += `<option>Select Upazila</option>`;
            up[1].forEach((item) => {
              if (item.district_id === e.target.value) {
                storeUp += `<option value=${item.id}>${item.name}</option>`;
              }
            });
            upazilaID.innerHTML = storeUp;
            placeDistrict.innerHTML = e.target.selectedOptions[0].text;
            placeUpazila.innerHTML = ""
          })
        );
    });
    upazilaID.addEventListener("change", function (e) {
      placeUpazila.innerHTML = e.target.selectedOptions[0].text;
    });
  }
