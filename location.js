const places = {
  Primo: {
    phone: "847...",
    address: "1234 ln",
    img: "./images/sarpino.jpeg"
  },
  place2: {
    data: "thing"
  }
};


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.place; 
  document.getElementById("body").innerHTML = value;