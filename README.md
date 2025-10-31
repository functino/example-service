# Interview Service

Just a small example service.

### Routes

- **GET /country/:countryId**
  Retrieves basic country information, including a list of cities.

- **GET /prices/:countryId**
  Retrieves hotel price data for the cities from the given country.

### development

```bash
nvm use
npm ci
npm run dev
```

### TODO
- start the service and check if it works by opening: http://localhost:3000/country/1
- extract the countries definition to an own file
- add a `/search` endpoint that takes a `q` parameter and searches for matching countries
