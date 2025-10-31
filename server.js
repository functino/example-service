import express from "express";

const countries = [
  {
    id: 1,
    name: "France",
    cities: [
      { id: 1, name: "Paris", price: 120 },
      { id: 2, name: "Lyon", price: 80 },
      { id: 3, name: "Marseille", price: 90 },
    ],
  },
  {
    id: 2,
    name: "USA",
    cities: [
      { id: 4, name: "New York", price: 200 },
      { id: 5, name: "Los Angeles", price: 180 },
      { id: 6, name: "Chicago", price: 150 },
    ],
  },
  {
    id: 3,
    name: "Japan",
    cities: [
      { id: 7, name: "Tokyo", price: 160 },
      { id: 8, name: "Osaka", price: 120 },
      { id: 9, name: "Kyoto", price: 110 },
    ],
  },
  {
    id: 4,
    name: "Australia",
    cities: [
      { id: 10, name: "Sydney", price: 140 },
      { id: 11, name: "Melbourne", price: 130 },
      { id: 12, name: "Brisbane", price: 100 },
    ],
  },
  {
    id: 5,
    name: "Germany",
    cities: [
      { id: 13, name: "Berlin", price: 110 },
      { id: 14, name: "Munich", price: 120 },
      { id: 15, name: "Frankfurt", price: 100 },
    ],
  },
  {
    id: 6,
    name: "Spain",
    cities: [
      { id: 16, name: "Barcelona", price: 90 },
      { id: 17, name: "Madrid", price: 100 },
      { id: 18, name: "Seville", price: 80 },
    ],
  },
  {
    id: 7,
    name: "Italy",
    cities: [
      { id: 19, name: "Rome", price: 130 },
      { id: 20, name: "Milan", price: 140 },
      { id: 21, name: "Florence", price: 120 },
    ],
  },
  {
    id: 8,
    name: "UK",
    cities: [
      { id: 22, name: "London", price: 150 },
      { id: 23, name: "Manchester", price: 110 },
      { id: 24, name: "Liverpool", price: 100 },
    ],
  },
  {
    id: 9,
    name: "UAE",
    cities: [
      { id: 25, name: "Dubai", price: 170 },
      { id: 26, name: "Abu Dhabi", price: 160 },
    ],
  },
  {
    id: 10,
    name: "South Africa",
    cities: [
      { id: 27, name: "Cape Town", price: 100 },
      { id: 28, name: "Johannesburg", price: 90 },
    ],
  },
  {
    id: 11,
    name: "Canada",
    cities: [
      { id: 29, name: "Toronto", price: 140 },
      { id: 30, name: "Vancouver", price: 150 },
      { id: 31, name: "Montreal", price: 120 },
    ],
  },
  {
    id: 12,
    name: "Brazil",
    cities: [
      { id: 32, name: "Rio de Janeiro", price: 110 },
      { id: 33, name: "São Paulo", price: 120 },
      { id: 34, name: "Brasília", price: 100 },
    ],
  },
  {
    id: 13,
    name: "Thailand",
    cities: [
      { id: 35, name: "Bangkok", price: 80 },
      { id: 36, name: "Phuket", price: 90 },
      { id: 37, name: "Chiang Mai", price: 70 },
    ],
  },
  {
    id: 14,
    name: "Singapore",
    cities: [
      { id: 38, name: "Singapore", price: 180 },
    ],
  },
  {
    id: 15,
    name: "Netherlands",
    cities: [
      { id: 39, name: "Amsterdam", price: 130 },
      { id: 40, name: "Rotterdam", price: 110 },
      { id: 41, name: "The Hague", price: 120 },
    ],
  },
  {
    id: 16,
    name: "Greece",
    cities: [
      { id: 42, name: "Athens", price: 100 },
      { id: 43, name: "Santorini", price: 150 },
      { id: 44, name: "Mykonos", price: 140 },
    ],
  },
  {
    id: 17,
    name: "Portugal",
    cities: [
      { id: 45, name: "Lisbon", price: 90 },
      { id: 46, name: "Porto", price: 80 },
      { id: 47, name: "Faro", price: 85 },
    ],
  },
  {
    id: 18,
    name: "Switzerland",
    cities: [
      { id: 48, name: "Zurich", price: 200 },
      { id: 49, name: "Geneva", price: 190 },
      { id: 50, name: "Lucerne", price: 170 },
    ],
  },
  {
    id: 19,
    name: "Mexico",
    cities: [
      { id: 51, name: "Cancun", price: 110 },
      { id: 52, name: "Mexico City", price: 90 },
      { id: 53, name: "Playa del Carmen", price: 100 },
    ],
  },
  {
    id: 20,
    name: "Turkey",
    cities: [
      { id: 54, name: "Istanbul", price: 85 },
      { id: 55, name: "Antalya", price: 75 },
      { id: 56, name: "Cappadocia", price: 80 },
    ],
  },
  {
    id: 21,
    name: "Argentina",
    cities: [
      { id: 57, name: "Buenos Aires", price: 95 },
      { id: 58, name: "Mendoza", price: 85 },
      { id: 59, name: "Córdoba", price: 75 },
    ],
  },
  {
    id: 22,
    name: "Austria",
    cities: [
      { id: 60, name: "Vienna", price: 130 },
      { id: 61, name: "Salzburg", price: 120 },
      { id: 62, name: "Innsbruck", price: 110 },
    ],
  },
  {
    id: 23,
    name: "Belgium",
    cities: [
      { id: 63, name: "Brussels", price: 115 },
      { id: 64, name: "Bruges", price: 105 },
      { id: 65, name: "Antwerp", price: 100 },
    ],
  },
  {
    id: 24,
    name: "Chile",
    cities: [
      { id: 66, name: "Santiago", price: 90 },
      { id: 67, name: "Valparaíso", price: 80 },
      { id: 68, name: "Viña del Mar", price: 85 },
    ],
  },
  {
    id: 25,
    name: "China",
    cities: [
      { id: 69, name: "Beijing", price: 120 },
      { id: 70, name: "Shanghai", price: 140 },
      { id: 71, name: "Hong Kong", price: 160 },
    ],
  },
  {
    id: 26,
    name: "Colombia",
    cities: [
      { id: 72, name: "Bogotá", price: 75 },
      { id: 73, name: "Medellín", price: 70 },
      { id: 74, name: "Cartagena", price: 85 },
    ],
  },
  {
    id: 27,
    name: "Croatia",
    cities: [
      { id: 75, name: "Zagreb", price: 90 },
      { id: 76, name: "Dubrovnik", price: 110 },
      { id: 77, name: "Split", price: 95 },
    ],
  },
  {
    id: 28,
    name: "Czech Republic",
    cities: [
      { id: 78, name: "Prague", price: 95 },
      { id: 79, name: "Brno", price: 75 },
      { id: 80, name: "Český Krumlov", price: 80 },
    ],
  },
  {
    id: 29,
    name: "Denmark",
    cities: [
      { id: 81, name: "Copenhagen", price: 150 },
      { id: 82, name: "Aarhus", price: 120 },
      { id: 83, name: "Odense", price: 110 },
    ],
  },
  {
    id: 30,
    name: "Egypt",
    cities: [
      { id: 84, name: "Cairo", price: 70 },
      { id: 85, name: "Alexandria", price: 65 },
      { id: 86, name: "Luxor", price: 75 },
    ],
  },
  {
    id: 31,
    name: "Finland",
    cities: [
      { id: 87, name: "Helsinki", price: 140 },
      { id: 88, name: "Rovaniemi", price: 120 },
      { id: 89, name: "Turku", price: 110 },
    ],
  },
  {
    id: 32,
    name: "Hungary",
    cities: [
      { id: 90, name: "Budapest", price: 85 },
      { id: 91, name: "Debrecen", price: 65 },
      { id: 92, name: "Szeged", price: 70 },
    ],
  },
  {
    id: 33,
    name: "Iceland",
    cities: [
      { id: 93, name: "Reykjavik", price: 160 },
      { id: 94, name: "Akureyri", price: 140 },
    ],
  },
  {
    id: 34,
    name: "India",
    cities: [
      { id: 95, name: "Mumbai", price: 80 },
      { id: 96, name: "Delhi", price: 75 },
      { id: 97, name: "Bangalore", price: 70 },
    ],
  },
  {
    id: 35,
    name: "Indonesia",
    cities: [
      { id: 98, name: "Jakarta", price: 70 },
      { id: 99, name: "Bali", price: 90 },
      { id: 100, name: "Yogyakarta", price: 65 },
    ],
  },
  {
    id: 36,
    name: "Ireland",
    cities: [
      { id: 101, name: "Dublin", price: 130 },
      { id: 102, name: "Cork", price: 100 },
      { id: 103, name: "Galway", price: 95 },
    ],
  },
  {
    id: 37,
    name: "Israel",
    cities: [
      { id: 104, name: "Tel Aviv", price: 140 },
      { id: 105, name: "Jerusalem", price: 120 },
      { id: 106, name: "Haifa", price: 110 },
    ],
  },
  {
    id: 38,
    name: "Malaysia",
    cities: [
      { id: 107, name: "Kuala Lumpur", price: 75 },
      { id: 108, name: "Penang", price: 70 },
      { id: 109, name: "Langkawi", price: 80 },
    ],
  },
  {
    id: 39,
    name: "Morocco",
    cities: [
      { id: 110, name: "Marrakech", price: 75 },
      { id: 111, name: "Casablanca", price: 80 },
      { id: 112, name: "Fez", price: 70 },
    ],
  },
  {
    id: 40,
    name: "New Zealand",
    cities: [
      { id: 113, name: "Auckland", price: 130 },
      { id: 114, name: "Wellington", price: 120 },
      { id: 115, name: "Queenstown", price: 140 },
    ],
  },
  {
    id: 41,
    name: "Norway",
    cities: [
      { id: 116, name: "Oslo", price: 160 },
      { id: 117, name: "Bergen", price: 150 },
      { id: 118, name: "Tromsø", price: 140 },
    ],
  },
  {
    id: 42,
    name: "Peru",
    cities: [
      { id: 119, name: "Lima", price: 80 },
      { id: 120, name: "Cusco", price: 75 },
      { id: 121, name: "Arequipa", price: 70 },
    ],
  },
  {
    id: 43,
    name: "Philippines",
    cities: [
      { id: 122, name: "Manila", price: 70 },
      { id: 123, name: "Cebu", price: 75 },
      { id: 124, name: "Boracay", price: 85 },
    ],
  },
  {
    id: 44,
    name: "Poland",
    cities: [
      { id: 125, name: "Warsaw", price: 85 },
      { id: 126, name: "Krakow", price: 80 },
      { id: 127, name: "Gdansk", price: 75 },
    ],
  },
  {
    id: 45,
    name: "Qatar",
    cities: [
      { id: 128, name: "Doha", price: 150 },
    ],
  },
  {
    id: 46,
    name: "Romania",
    cities: [
      { id: 129, name: "Bucharest", price: 75 },
      { id: 130, name: "Brasov", price: 70 },
      { id: 131, name: "Cluj-Napoca", price: 65 },
    ],
  },
  {
    id: 47,
    name: "Russia",
    cities: [
      { id: 132, name: "Moscow", price: 110 },
      { id: 133, name: "St. Petersburg", price: 100 },
      { id: 134, name: "Sochi", price: 90 },
    ],
  },
  {
    id: 48,
    name: "Saudi Arabia",
    cities: [
      { id: 135, name: "Riyadh", price: 130 },
      { id: 136, name: "Jeddah", price: 120 },
      { id: 137, name: "Mecca", price: 110 },
    ],
  },
  {
    id: 49,
    name: "South Korea",
    cities: [
      { id: 138, name: "Seoul", price: 130 },
      { id: 139, name: "Busan", price: 110 },
      { id: 140, name: "Jeju", price: 120 },
    ],
  },
  {
    id: 50,
    name: "Sweden",
    cities: [
      { id: 141, name: "Stockholm", price: 150 },
      { id: 142, name: "Gothenburg", price: 130 },
      { id: 143, name: "Malmö", price: 120 },
    ],
  },
  {
    id: 51,
    name: "Taiwan",
    cities: [
      { id: 144, name: "Taipei", price: 100 },
      { id: 145, name: "Kaohsiung", price: 85 },
      { id: 146, name: "Taichung", price: 90 },
    ],
  },
  {
    id: 52,
    name: "Tunisia",
    cities: [
      { id: 147, name: "Tunis", price: 65 },
      { id: 148, name: "Sousse", price: 60 },
      { id: 149, name: "Hammamet", price: 70 },
    ],
  },
  {
    id: 53,
    name: "Vietnam",
    cities: [
      { id: 150, name: "Hanoi", price: 65 },
      { id: 151, name: "Ho Chi Minh City", price: 70 },
      { id: 152, name: "Da Nang", price: 75 },
    ],
  },
  {
    id: 54,
    name: "Jordan",
    cities: [
      { id: 153, name: "Amman", price: 90 },
      { id: 154, name: "Petra", price: 100 },
      { id: 155, name: "Aqaba", price: 95 },
    ],
  },
  {
    id: 55,
    name: "Kenya",
    cities: [
      { id: 156, name: "Nairobi", price: 85 },
      { id: 157, name: "Mombasa", price: 80 },
      { id: 158, name: "Kisumu", price: 70 },
    ],
  },
  {
    id: 56,
    name: "Lebanon",
    cities: [
      { id: 159, name: "Beirut", price: 95 },
      { id: 160, name: "Byblos", price: 85 },
      { id: 161, name: "Tripoli", price: 80 },
    ],
  },
  {
    id: 57,
    name: "Luxembourg",
    cities: [
      { id: 162, name: "Luxembourg City", price: 140 },
    ],
  },
  {
    id: 58,
    name: "Malta",
    cities: [
      { id: 163, name: "Valletta", price: 100 },
      { id: 164, name: "Sliema", price: 95 },
      { id: 165, name: "Gozo", price: 90 },
    ],
  },
  {
    id: 59,
    name: "Monaco",
    cities: [
      { id: 166, name: "Monte Carlo", price: 250 },
    ],
  },
  {
    id: 60,
    name: "Nigeria",
    cities: [
      { id: 167, name: "Lagos", price: 80 },
      { id: 168, name: "Abuja", price: 85 },
      { id: 169, name: "Kano", price: 70 },
    ],
  },
  {
    id: 61,
    name: "Oman",
    cities: [
      { id: 170, name: "Muscat", price: 120 },
      { id: 171, name: "Salalah", price: 100 },
    ],
  },
  {
    id: 62,
    name: "Pakistan",
    cities: [
      { id: 172, name: "Karachi", price: 65 },
      { id: 173, name: "Lahore", price: 70 },
      { id: 174, name: "Islamabad", price: 75 },
    ],
  },
  {
    id: 63,
    name: "Panama",
    cities: [
      { id: 175, name: "Panama City", price: 85 },
      { id: 176, name: "Bocas del Toro", price: 80 },
    ],
  },
  {
    id: 64,
    name: "Sri Lanka",
    cities: [
      { id: 177, name: "Colombo", price: 70 },
      { id: 178, name: "Kandy", price: 65 },
      { id: 179, name: "Galle", price: 75 },
    ],
  },
  {
    id: 65,
    name: "Tanzania",
    cities: [
      { id: 180, name: "Dar es Salaam", price: 75 },
      { id: 181, name: "Zanzibar", price: 85 },
      { id: 182, name: "Arusha", price: 80 },
    ],
  },
  {
    id: 66,
    name: "Uganda",
    cities: [
      { id: 183, name: "Kampala", price: 70 },
      { id: 184, name: "Entebbe", price: 75 },
    ],
  },
  {
    id: 67,
    name: "Ukraine",
    cities: [
      { id: 185, name: "Kyiv", price: 80 },
      { id: 186, name: "Lviv", price: 75 },
      { id: 187, name: "Odesa", price: 70 },
    ],
  },
  {
    id: 68,
    name: "Uruguay",
    cities: [
      { id: 188, name: "Montevideo", price: 85 },
      { id: 189, name: "Punta del Este", price: 95 },
    ],
  },
  {
    id: 69,
    name: "Venezuela",
    cities: [
      { id: 190, name: "Caracas", price: 75 },
      { id: 191, name: "Maracaibo", price: 70 },
      { id: 192, name: "Valencia", price: 65 },
    ],
  },
  {
    id: 70,
    name: "Zimbabwe",
    cities: [
      { id: 193, name: "Harare", price: 70 },
      { id: 194, name: "Bulawayo", price: 65 },
    ],
  },
  {
    id: 71,
    name: "Ecuador",
    cities: [
      { id: 195, name: "Quito", price: 75 },
      { id: 196, name: "Guayaquil", price: 80 },
      { id: 197, name: "Cuenca", price: 70 },
    ],
  },
  {
    id: 72,
    name: "Bolivia",
    cities: [
      { id: 198, name: "La Paz", price: 65 },
      { id: 199, name: "Santa Cruz", price: 70 },
      { id: 200, name: "Sucre", price: 60 },
    ],
  },
  {
    id: 73,
    name: "Costa Rica",
    cities: [
      { id: 201, name: "San José", price: 85 },
      { id: 202, name: "Manuel Antonio", price: 95 },
      { id: 203, name: "Tamarindo", price: 90 },
    ],
  },
  {
    id: 74,
    name: "Cuba",
    cities: [
      { id: 204, name: "Havana", price: 80 },
      { id: 205, name: "Varadero", price: 90 },
      { id: 206, name: "Santiago de Cuba", price: 75 },
    ],
  },
  {
    id: 75,
    name: "Dominican Republic",
    cities: [
      { id: 207, name: "Santo Domingo", price: 85 },
      { id: 208, name: "Punta Cana", price: 100 },
      { id: 209, name: "Puerto Plata", price: 90 },
    ],
  },
  {
    id: 76,
    name: "El Salvador",
    cities: [
      { id: 210, name: "San Salvador", price: 70 },
      { id: 211, name: "La Libertad", price: 75 },
    ],
  },
  {
    id: 77,
    name: "Guatemala",
    cities: [
      { id: 212, name: "Guatemala City", price: 70 },
      { id: 213, name: "Antigua", price: 80 },
      { id: 214, name: "Flores", price: 75 },
    ],
  },
  {
    id: 78,
    name: "Honduras",
    cities: [
      { id: 215, name: "Tegucigalpa", price: 65 },
      { id: 216, name: "Roatán", price: 85 },
    ],
  },
  {
    id: 79,
    name: "Jamaica",
    cities: [
      { id: 217, name: "Kingston", price: 90 },
      { id: 218, name: "Montego Bay", price: 100 },
      { id: 219, name: "Negril", price: 95 },
    ],
  },
  {
    id: 80,
    name: "Nicaragua",
    cities: [
      { id: 220, name: "Managua", price: 65 },
      { id: 221, name: "Granada", price: 70 },
      { id: 222, name: "León", price: 65 },
    ],
  },
  {
    id: 81,
    name: "Paraguay",
    cities: [
      { id: 223, name: "Asunción", price: 70 },
      { id: 224, name: "Ciudad del Este", price: 65 },
    ],
  },
  {
    id: 82,
    name: "Puerto Rico",
    cities: [
      { id: 225, name: "San Juan", price: 110 },
      { id: 226, name: "Ponce", price: 90 },
    ],
  },
  {
    id: 83,
    name: "Trinidad and Tobago",
    cities: [
      { id: 227, name: "Port of Spain", price: 85 },
      { id: 228, name: "Scarborough", price: 80 },
    ],
  },
  {
    id: 84,
    name: "Bahamas",
    cities: [
      { id: 229, name: "Nassau", price: 150 },
      { id: 230, name: "Freeport", price: 130 },
    ],
  },
  {
    id: 85,
    name: "Barbados",
    cities: [
      { id: 231, name: "Bridgetown", price: 120 },
      { id: 232, name: "Holetown", price: 130 },
    ],
  },
  {
    id: 86,
    name: "Maldives",
    cities: [
      { id: 233, name: "Malé", price: 200 },
      { id: 234, name: "Maafushi", price: 180 },
    ],
  },
  {
    id: 87,
    name: "Seychelles",
    cities: [
      { id: 235, name: "Victoria", price: 220 },
      { id: 236, name: "Praslin", price: 200 },
    ],
  },
  {
    id: 88,
    name: "Mauritius",
    cities: [
      { id: 237, name: "Port Louis", price: 130 },
      { id: 238, name: "Grand Baie", price: 140 },
    ],
  },
  {
    id: 89,
    name: "Fiji",
    cities: [
      { id: 239, name: "Suva", price: 120 },
      { id: 240, name: "Nadi", price: 130 },
    ],
  },
  {
    id: 90,
    name: "Cyprus",
    cities: [
      { id: 241, name: "Nicosia", price: 100 },
      { id: 242, name: "Limassol", price: 110 },
      { id: 243, name: "Paphos", price: 105 },
    ],
  },
  {
    id: 91,
    name: "Estonia",
    cities: [
      { id: 244, name: "Tallinn", price: 95 },
      { id: 245, name: "Tartu", price: 80 },
    ],
  },
  {
    id: 92,
    name: "Latvia",
    cities: [
      { id: 246, name: "Riga", price: 90 },
      { id: 247, name: "Jurmala", price: 85 },
    ],
  },
  {
    id: 93,
    name: "Lithuania",
    cities: [
      { id: 248, name: "Vilnius", price: 85 },
      { id: 249, name: "Kaunas", price: 75 },
    ],
  },
  {
    id: 94,
    name: "Slovenia",
    cities: [
      { id: 250, name: "Ljubljana", price: 95 },
      { id: 251, name: "Bled", price: 105 },
      { id: 252, name: "Piran", price: 100 },
    ],
  },
  {
    id: 95,
    name: "Slovakia",
    cities: [
      { id: 253, name: "Bratislava", price: 85 },
      { id: 254, name: "Košice", price: 75 },
    ],
  },
  {
    id: 96,
    name: "Serbia",
    cities: [
      { id: 255, name: "Belgrade", price: 75 },
      { id: 256, name: "Novi Sad", price: 70 },
    ],
  },
  {
    id: 97,
    name: "Bulgaria",
    cities: [
      { id: 257, name: "Sofia", price: 70 },
      { id: 258, name: "Plovdiv", price: 65 },
      { id: 259, name: "Varna", price: 75 },
    ],
  },
  {
    id: 98,
    name: "Albania",
    cities: [
      { id: 260, name: "Tirana", price: 70 },
      { id: 261, name: "Durrës", price: 75 },
    ],
  },
  {
    id: 99,
    name: "North Macedonia",
    cities: [
      { id: 262, name: "Skopje", price: 65 },
      { id: 263, name: "Ohrid", price: 70 },
    ],
  },
  {
    id: 100,
    name: "Bosnia and Herzegovina",
    cities: [
      { id: 264, name: "Sarajevo", price: 75 },
      { id: 265, name: "Mostar", price: 70 },
    ],
  },
  {
    id: 101,
    name: "Montenegro",
    cities: [
      { id: 266, name: "Podgorica", price: 80 },
      { id: 267, name: "Kotor", price: 90 },
    ],
  },
  {
    id: 102,
    name: "Armenia",
    cities: [
      { id: 268, name: "Yerevan", price: 70 },
      { id: 269, name: "Gyumri", price: 60 },
    ],
  },
  {
    id: 103,
    name: "Georgia",
    cities: [
      { id: 270, name: "Tbilisi", price: 75 },
      { id: 271, name: "Batumi", price: 80 },
    ],
  },
  {
    id: 104,
    name: "Azerbaijan",
    cities: [
      { id: 272, name: "Baku", price: 90 },
      { id: 273, name: "Ganja", price: 75 },
    ],
  },
  {
    id: 105,
    name: "Kazakhstan",
    cities: [
      { id: 274, name: "Almaty", price: 85 },
      { id: 275, name: "Nur-Sultan", price: 90 },
    ],
  },
  {
    id: 106,
    name: "Uzbekistan",
    cities: [
      { id: 276, name: "Tashkent", price: 70 },
      { id: 277, name: "Samarkand", price: 75 },
      { id: 278, name: "Bukhara", price: 70 },
    ],
  },
  {
    id: 107,
    name: "Nepal",
    cities: [
      { id: 279, name: "Kathmandu", price: 65 },
      { id: 280, name: "Pokhara", price: 60 },
    ],
  },
  {
    id: 108,
    name: "Bangladesh",
    cities: [
      { id: 281, name: "Dhaka", price: 60 },
      { id: 282, name: "Chittagong", price: 55 },
    ],
  },
  {
    id: 109,
    name: "Myanmar",
    cities: [
      { id: 283, name: "Yangon", price: 65 },
      { id: 284, name: "Mandalay", price: 60 },
      { id: 285, name: "Bagan", price: 70 },
    ],
  },
  {
    id: 110,
    name: "Cambodia",
    cities: [
      { id: 286, name: "Phnom Penh", price: 60 },
      { id: 287, name: "Siem Reap", price: 70 },
      { id: 288, name: "Sihanoukville", price: 65 },
    ],
  },
  {
    id: 111,
    name: "Laos",
    cities: [
      { id: 289, name: "Vientiane", price: 60 },
      { id: 290, name: "Luang Prabang", price: 65 },
    ],
  },
  {
    id: 112,
    name: "Brunei",
    cities: [
      { id: 291, name: "Bandar Seri Begawan", price: 100 },
    ],
  },
  {
    id: 113,
    name: "Papua New Guinea",
    cities: [
      { id: 292, name: "Port Moresby", price: 110 },
    ],
  },
  {
    id: 114,
    name: "Botswana",
    cities: [
      { id: 293, name: "Gaborone", price: 85 },
      { id: 294, name: "Maun", price: 90 },
    ],
  },
  {
    id: 115,
    name: "Namibia",
    cities: [
      { id: 295, name: "Windhoek", price: 80 },
      { id: 296, name: "Swakopmund", price: 85 },
    ],
  },
  {
    id: 116,
    name: "Zambia",
    cities: [
      { id: 297, name: "Lusaka", price: 75 },
      { id: 298, name: "Livingstone", price: 80 },
    ],
  },
  {
    id: 117,
    name: "Mozambique",
    cities: [
      { id: 299, name: "Maputo", price: 75 },
      { id: 300, name: "Pemba", price: 80 },
    ],
  },
  {
    id: 118,
    name: "Madagascar",
    cities: [
      { id: 301, name: "Antananarivo", price: 70 },
      { id: 302, name: "Nosy Be", price: 85 },
    ],
  },
  {
    id: 119,
    name: "Ethiopia",
    cities: [
      { id: 303, name: "Addis Ababa", price: 70 },
      { id: 304, name: "Lalibela", price: 75 },
    ],
  },
  {
    id: 120,
    name: "Ghana",
    cities: [
      { id: 305, name: "Accra", price: 75 },
      { id: 306, name: "Kumasi", price: 70 },
    ],
  },
];

const app = express();

app.get("/country/:countryId", (req, res) => {
  const countryId = parseInt(req.params.countryId, 10);
  const country = countries.find((country) => country.id === countryId);
  if (country) {
    res.json({
      id: country.id,
      name: country.name,
      cities: country.cities.map(({ name, id }) => ({ name, id })),
    });
  } else {
    res.status(404).json({ error: "Country not found" });
  }
});

app.get("/prices/:countryId", (req, res) => {
  const countryId = parseInt(req.params.countryId, 10);
  const country = countries.find((country) => country.id === countryId);
  if (country) {
    res.json(
      country.cities.map((city) => ({
        cityId: city.id,
        cheapestHotelPrice: city.price,
      })),
    );
  } else {
    res.status(404).json({ error: "Price data not found" });
  }
});

app.listen(3000, () =>
  console.log("Server listening on http://localhost:3000"),
);
