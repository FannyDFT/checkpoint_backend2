import datasource from "../lib/datasource";
import CountryService from "../services/country.service";

async function loadFixtures() {
  await datasource.initialize();

  const countryService = new CountryService();

  const countries = [
    { code: "FR", name: "France", emoji: "🇫🇷", continentCode: "EU" },
    { code: "BE", name: "Belgique", emoji: "🇧🇪", continentCode: "EU" },
    { code: "AN", name: "Andorre", emoji: "🇦🇩", continentCode: "EU" },
    { code: "US", name: "United States", emoji: "🇺🇸", continentCode: "NA" },
    { code: "BR", name: "Brazil", emoji: "🇧🇷", continentCode: "SA" },
  ];

  for (const country of countries) {
    await countryService.addCountry(country);
  }

  console.log("Fixtures loaded successfully.");
}

loadFixtures();
