/*



*/

//These dictionaries are our "database". 
const restaurant = {
    Primo: {
      style: 'Italian',
      rating: 4,
      price: 3
    },
    Sarpino: {
      style: 'Italian',
      rating: 4,
      price: 2
    },
    Galati_Pizza: {
      style: "Italian",
      rating: 4,
      price: 1
    },
    Capones_Kitchen: {
      style: "Italian",
      rating: 2,
      price: 1
    },
    Olive_Garden_Italian_Resturant: {
      style: "Italian",
      rating: 4,
      price: 2
    },
    Jesse_Oaks_Food_and_Drinks: {
      style: "American",
      rating: 4,
      price: 2
    },
    Flanagans_Bar_and_Grill: {
      style: "American",
      rating: 3,
      price: 1
    },
    First_Draft_Grays_lake: {
      style: "American",
      rating: 3,
      price: 1
    },
    Culvers: {
      style: "American",
      rating: 4,
      price: 1
    },
    The_Backyard_Steak_Pit: {
      style: "American",
      rating: 4,
      price: 3
    },
    El_Atezca_Two: {
      style: "Mexican",
      rating: 4,
      price: 1
    },
    Tacos_El_Norte_Gurnee: {
      style: "Mexican",
      rating: 3,
      price: 2
    },
    Abels_Cantina: {
      style: "Mexican",
      rating: 4,
      price: 1
    },
    Taqueria_Los_Comales: {
      style: "Mexican",
      rating: 4,
      price: 1
    },
    Dulces_Margaritas: {
      style: "Mexican",
      rating: 4,
      price: 2
    }
  };
  const stores = {
    Marianos: {
      style: "Grocery",
      rating: 4,
      price: 2
    },
    Jewel_Osco: {
      style: "Grocery",
      rating: 4,
      price: 2
    },
    Georges_Fresh_Market: {
      style: "Grocery",
      rating: 3,
      price: 1
    },
    Heinens_Grocery_Store: {
      style: "Grocery",
      rating: 4,
      price: 1
    },
    Jims_Pantry_FoodMart: {
      style: "Grocery",
      rating: 3,
      price: 1
    },
    Full_Circle_Clothing: {
      style: "Clothing",
      rating: 3,
      price: 2
    },
    Dds_Discount: {
      style: "Clothing",
      rating: 4,
      price: 1
    },
    H_and_M: {
      style: "Clothing",
      rating: 4,
      price: 1
    },
    Ross_Dress_For_Less: {
      style: "Clothing",
      rating: 3,
      price: 1
    },
    Windsor: {
      style: "Clothing",
      rating: 4,
      price: 3
    },
    Lucys_Appliances: {
      style: "Appliances",
      rating: 4,
      price: 3
    },
    BestBuy: {
      style: "Appliances",
      rating: 4,
      price: 2
    },
    Aarons: {
      style: "Appliances",
      rating: 3,
      price: 1
    },
    The_Home_Depot: {
      style: "Appliances",
      rating: 4,
      price: 1
    },
    Affordable_Alliances_Inc: {
      style: "Appliances",
      rating: 4,
      price: 1
    },
  
  };
  const entertainment = {
    Citadel_Theatre: {
      style: "Theatrics",
      rating: 4,
      price: 1
    },
    Stadning_Ovation_Theatre_Academy: {
      style: "Theatrics",
      rating: 4,
      price: 2
    },
    James_Lumber_Center_for_the_Performing_Arts: {
      style: "Theatrics",
      rating: 4,
      price: 1
    },
    Imporv_Playhouse_Theater: {
      style: "Theatrics",
      rating: 4,
      price: 1
    },
    Genesee_Theatre: {
      style: "Theatrics",
      rating: 4,
      price: 3
    },
    C_You_At_The_Movies_Inc: {
      style: "Movies",
      rating: 4,
      price: 1
    },
    Marcus_Gurnee_Mills_Cinema: {
      style: "Movies",
      rating: 4,
      price: 1
    },
    Regal_Round_Lake_Beach: {
      style: "Movies",
      rating: 4,
      price: 1
    },
    Regal_Lake_Zurich: {
      style: "Movies",
      rating: 3,
      price: 1
    },
    McHenry_Downtown_Indoor_Theater: {
      style: "Movies",
      rating: 4,
      price: 1
    },
  };
  const attractions = {
    Launch_Trampoline_Park_Gurnee: {
      style: "Indoor",
      rating: 4,
      price: 2
    },
    Sixty_To_Escape: {
      style: "Indoor",
      rating: 4,
      price: 3
    },
    Grayslake_Heritage_Center: {
      style: "Indoor",
      rating: 4,
      price: 1
    },
    K1_Speed: {
      style: "Indoor",
      rating: 4,
      price: 3
    },
    Prairie_Grass_Nature_Museum: {
      style: "Indoor",
      rating: 4,
      price: 1
    },
    SixFlags_Great_America: {
      style: "Outdoor",
      rating: 4,
      price: 2
    },
    Hurricane_Harbor: {
      style: "Outdoor",
      rating: 4,
      price: 2
    },
    Fort_Sheridan_Forest_Preserve: {
      style: "Outdoor",
      rating: 4,
      price: 1
    },
    Waukegan_Municipal_Beach: {
      style: "Outdoor",
      rating: 4,
      price: 1
    },
    Volo_Bog_State_Nature: {
      style: "Outdoor",
      rating: 4,
      price: 1
    }
  };
  const hotels = {
    Travelodge_By_Whyndham_Waukegan: {
      rating: 3,
      price: 1
    },
    Deer_Path_Inn:
    {
      rating: 4,
      price: 3
    },
    Sonesta_Select_Arlington_Heights_North:
    {
      rating: 4,
      price: 2
    },
    La_Quinta_Innand_Suite_by_Wyndham_Chicago_Gurnee:
    {
      rating: 1,
      price: 1
    },
    Woodspring_Suites_Gurnee:
    {
      rating: 3,
      price: 2
    },
    //all of the the code above is a dictionary in a dictionary for our data storage
  
  };
  
  let currentPlaces = [];
  
  //declaring some things for later
  const specificDiv = document.getElementById("specificPlaces"); //div where new drop down will appear
  const specPlace = document.createElement("select"); //Creates placeholder for dropdown menu (onChange uses this).
  const specText = document.createElement("div");
        specText.id = "specText";
        specText.className = "specText";
  const button = document.getElementById("button");
  
  let counter = 0; //helps us count later
  let extra = ''; //the extra HTML to be added to each type of extra dropdown, declared later
  let placeholder = null; //placeholder for the dictionary
  let type = ''; //what TYPE of place (store, restaurant, etc.)
  
  let selectElement = document.querySelector('#typeContent');
  let selectExpense = document.querySelector('#expenseContent');
  let selectElement2 = document.querySelector('#ratingContent');
  
  let formattedPlace = '';
  // this would store the certian places that pertian to all the filters and store so the code output
  let placeArray = [];
  //this event listener listens if the user chnages any filter and presses the check option button
  button.addEventListener("click", function () {
    if (placeholder != null)
      getOption(placeholder);
  });
  
  //add event listener to detect change in "type" drop down
  selectElement.addEventListener("change", function () {
    type = selectElement.value; //Grab current value of "Type" drop down 
    //Checking selected drop down item
    if (type != "Type") {
      if (type == "Restaurants") {
        extra = '<option value="typeofRest"> Select Cuisine</option><option value="Italian">Italian</option><option value="Mexican">Mexican</option> <option value="American">American</option>';
        placeholder = restaurant;
        onChange(type);
      }
      else if (type == "Stores") {
        extra = '<option value="typeofStore"> Select Catagory</option><option value="Appliances">Appliances</option><option value="Grocery">Grocery</option> <option value="Clothing">Clothing</option>';
        placeholder = stores;
        onChange(type);
      }
      else if (type == "Entertainment") {
        extra = '<option value="typeofEntertainment"> Select Catagory</option><option value="Theatrics">Theatrics</option><option value="Movies">Movies</option>';
        placeholder = entertainment;
        onChange(type);
      }
      else if (type == "Attractions") {
        extra = '<option value="typeofAttraction"> Select Catagory</option><option value="Indoor">Indoor</option><option value="Outdoor">Outdoor</option>';
        placeholder = attractions;
        onChange(type);
      }
      else if (type = "Hotels") {
        placeholder = hotels;
        specificDiv.innerHTML = "";
      }
    }
    //If we are uninterested, clear placeholder div
    else{
      specificDiv.innerHTML = "";
    }
  });


  
  function getOption(dictionary) {
    currentPlaces = []
    specText.innerHTML = null;
    if (specificDiv.innerHTML != "" && dictionary != hotels) {
      let selectStyle = document.querySelector('#specPlace');
      let filters = [selectStyle.value, parseInt(selectElement2.value), parseInt(selectExpense.value)];
      for (var place in dictionary) {
        formattedPlace = "";
        // counts if the program check all the filter and cmpares it with the data
        counter = 0;
        for (var quality in dictionary[place]) {
          if (counter == 0 && dictionary[place][quality] == filters[counter]) { }
          else if (counter == 1 && dictionary[place][quality] >= filters[counter]) { }
          else if (counter == 2 && dictionary[place][quality] <= filters[counter]) { }
          else {
            break;
          }
          counter++;
          if (counter == 3) {
            placeArray = place.split('_');
            for (var i = 0; i < placeArray.length; i++) {
              formattedPlace = formattedPlace + placeArray[i] + ' ';
            }
            // this formats our output and hsows the output in their repsctive places
            let temp = "window.location.href = \'"+ window.location.href + "?place=" + place +'\''
            temp = temp.replace("locative.html", "locationData.html")
            specText.innerHTML = specText.innerHTML + '<div class="boxes" id= \"' + place + '\" onclick = \"' + temp + '\" ><h1 class="text">' + formattedPlace + '</h1>' + '</div>';
            currentPlaces.push(place)
            document.getElementById("left").innerHTML = specText.innerHTML;
            break;
          }
        }
      }
    }
    else if (dictionary == hotels) {
      let filters = [parseInt(selectElement2.value), parseInt(selectExpense.value)];
      for (var place in dictionary) {
        formattedPlace = "";
        counter = 0;
        for (var quality in dictionary[place]) {
          if (counter == 0 && dictionary[place][quality] >= filters[counter]) { }
          else if (counter == 1 && dictionary[place][quality] <= filters[counter]) { }
          else {
            break;
          }
          counter++;
          if (counter == 2) {
            placeArray = place.split('_');
            for (var i = 0; i < placeArray.length; i++) {
              formattedPlace = formattedPlace + placeArray[i] + ' ';
            }
            let temp = "window.location.href = \'"+ window.location.href + "?place=" + place +'\''
            temp = temp.replace("locative.html", "locationData.html")
            specText.innerHTML = specText.innerHTML + '<div class="boxes" id= \"' + place + '\" onclick = \"' + temp + '\" ><h1 class="text">' + formattedPlace + '</h1>' + '</div>';
            currentPlaces.push(place)
            document.getElementById("left").innerHTML = specText.innerHTML;
            break;
          }
        }
      }
    }
    // for (var index in currentPlaces){
    //     document.getElementById(currentPlaces[index]).addEventListener("click", newPage(currentPlaces[index]))
    // }
  }

  //This function sets the inner HTML of premade div to activate new drop down with specified attributes
  function onChange(outputType) {
    specPlace.innerHTML = (extra);
    specPlace.name = outputType;
    specPlace.id = 'specPlace';
    specPlace.className = 'specifics';
    specificDiv.appendChild(specPlace);
  }
  
  
  //'<option value="typeOfRest">' + outputType + '</option>' + 