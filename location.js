const loc = {
  Primo: {
    phone: "847...",
    address: "1234 ln",
    img: "./images/sarpino.jpeg",

  }
};


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.place; 
  document.getElementById("body").innerHTML = "<img src= \'" + loc.Primo.img + "\'>";