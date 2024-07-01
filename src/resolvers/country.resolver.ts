// src/resolvers/CountryResolver.ts
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AdCountryInput, Country } from "../entities/Country.entity";
import CountryService from "../services/country.service";

@Resolver()
export default class CountryResolver {
  @Mutation(() => Country)
  async addCountry(@Arg("infos") infos: AdCountryInput) {
    const newCountry = await new CountryService().addCountry({ ...infos });
    return newCountry;
  }

  @Query(() => [Country])
  async countries() {
    return await new CountryService().getAllCountries();
  }

  @Query(() => Country, { nullable: true })
  async country(@Arg("code") code: string): Promise<Country | null> {
    return await new CountryService().getCountryByCode(code);
  }

  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continentCode") continentCode: string,
  ): Promise<Country[]> {
    return await new CountryService().getCountriesByContinent(continentCode);
  }
}
