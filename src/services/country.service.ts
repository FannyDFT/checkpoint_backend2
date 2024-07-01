// src/services/CountryService.ts
import { Repository } from "typeorm";
import { AdCountryInput, Country } from "../entities/Country.entity";
import datasource from "../lib/datasource";

export default class CountryService {
  db: Repository<Country>;

  constructor() {
    this.db = datasource.getRepository(Country);
  }

  //  Add a new country
  async addCountry(data: AdCountryInput) {
    const newCountry = this.db.create(data);
    return await this.db.save(newCountry);
  }

  //  Get all countries
  async getAllCountries(): Promise<Country[]> {
    return await this.db.find();
  }

  //  Get a country by code
  async getCountryByCode(code: string): Promise<Country | null> {
    return await this.db.findOneBy({ code });
  }

  //  Get countries by continent
  async getCountriesByContinent(continentCode: string): Promise<Country[]> {
    return await this.db.findBy({ continentCode });
  }
}
