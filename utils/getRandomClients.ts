import ddbLatina from "@/assets/clients/agencies/ddbLatina.svg";
import digitas from "@/assets/clients/agencies/digitas.svg";
import havas from "@/assets/clients/agencies/havas.svg";
import mcCann from "@/assets/clients/agencies/mcCann.svg";
import publicis from "@/assets/clients/agencies/publicis.svg";
import razorfish from "@/assets/clients/agencies/razorfish.svg";
import reachLocal from "@/assets/clients/agencies/reachLocal.svg";
import saatchi from "@/assets/clients/agencies/saatchi.svg";
import sapient from "@/assets/clients/agencies/sapient.svg";
import tbwa from "@/assets/clients/agencies/tbwa.svg";
import wpp from "@/assets/clients/agencies/wpp.svg";
import yellowPages from "@/assets/clients/agencies/yellowPages.svg";

import aclu from "@/assets/clients/brands/aclu.svg";
import aussie from "@/assets/clients/brands/aussie.svg";
import bayliner from "@/assets/clients/brands/bayliner.svg";
import blackDecker from "@/assets/clients/brands/blackDecker.svg";
import blueMoon from "@/assets/clients/brands/blueMoon.svg";
import boehringer from "@/assets/clients/brands/boehringer.svg";
import bostonWhaler from "@/assets/clients/brands/bostonWhaler.svg";
import cemex from "@/assets/clients/brands/cemex.svg";
import charmin from "@/assets/clients/brands/charmin.svg";
import chrysler from "@/assets/clients/brands/chrysler.svg";
import claro from "@/assets/clients/brands/claro.svg";
import dairyQueen from "@/assets/clients/brands/dairyQueen.svg";
import dodge from "@/assets/clients/brands/dodge.svg";
import ducati from "@/assets/clients/brands/ducati.svg";
import espaniaTurismo from "@/assets/clients/brands/espaniaTurismo.svg";
import eukanuba from "@/assets/clients/brands/eukanuba.svg";
import fiat from "@/assets/clients/brands/fiat.svg";
import foodNetwork from "@/assets/clients/brands/foodNetwork.svg";
import garnier from "@/assets/clients/brands/garnier.svg";
import gillette from "@/assets/clients/brands/gillette.svg";
import honda from "@/assets/clients/brands/honda.svg";
import isuzu from "@/assets/clients/brands/isuzu.svg";
import jeep from "@/assets/clients/brands/jeep.svg";
import joseCuervo from "@/assets/clients/brands/joseCuervo.svg";
import littleTikes from "@/assets/clients/brands/littleTikes.svg";
import loreal from "@/assets/clients/brands/loreal.svg";
import maybelline from "@/assets/clients/brands/maybelline.svg";
import mazda from "@/assets/clients/brands/mazda.svg";
import miele from "@/assets/clients/brands/miele.svg";
import mopar from "@/assets/clients/brands/mopar.svg";
import mortonSalt from "@/assets/clients/brands/mortonSalt.svg";
import nissan from "@/assets/clients/brands/nissan.svg";
import nivea from "@/assets/clients/brands/nivea.svg";
import oldSpice from "@/assets/clients/brands/oldSpice.svg";
import oliveGarden from "@/assets/clients/brands/oliveGarden.svg";
import pantene from "@/assets/clients/brands/pantene.svg";
import petSmart from "@/assets/clients/brands/petSmart.svg";
import pizzaHut from "@/assets/clients/brands/pizzaHut.svg";
import playtex from "@/assets/clients/brands/playtex.svg";
import porsche from "@/assets/clients/brands/porsche.svg";
import pumaEnergy from "@/assets/clients/brands/pumaEnergy.svg";
import ram from "@/assets/clients/brands/ram.svg";
import redLobster from "@/assets/clients/brands/redLobster.svg";
import ronaldMcDonalds from "@/assets/clients/brands/ronaldMcDonalds.svg";
import royalCanin from "@/assets/clients/brands/royalCanin.svg";
import sevenUp from "@/assets/clients/brands/sevenUp.svg";
import sizzler from "@/assets/clients/brands/sizzler.svg";
import sonyMusicLatin from "@/assets/clients/brands/sonyMusicLatin.svg";
import starbucks from "@/assets/clients/brands/starbucks.svg";
import subway from "@/assets/clients/brands/subway.svg";
import syfy from "@/assets/clients/brands/SYFY.svg";
import tacoBell from "@/assets/clients/brands/tacoBell.svg";
import tdi from "@/assets/clients/brands/tdi.svg";
import tMobile from "@/assets/clients/brands/tMobile.svg";
import toyota from "@/assets/clients/brands/toyota.svg";
import unitedWay from "@/assets/clients/brands/unitedWay.svg";
import walmart from "@/assets/clients/brands/walmart.svg";
import webex from "@/assets/clients/brands/webex.svg";
import wendys from "@/assets/clients/brands/wendys.svg";
import weTv from "@/assets/clients/brands/weTv.svg";
import wma from "@/assets/clients/brands/wma.svg";
import ymca from "@/assets/clients/brands/ymca.svg";

type Client = {
  image: string;
  imageAlt: string;
};

const agencies: Client[] = [
  { image: ddbLatina, imageAlt: "DDB Latina" },
  { image: digitas, imageAlt: "Digitas" },
  { image: havas, imageAlt: "Havas" },
  { image: mcCann, imageAlt: "Mc Cann" },
  { image: publicis, imageAlt: "Publicis" },
  { image: razorfish, imageAlt: "Razorfish" },
  { image: reachLocal, imageAlt: "Reach Local" },
  { image: saatchi, imageAlt: "Saatchi" },
  { image: sapient, imageAlt: "Sapient" },
  { image: tbwa, imageAlt: "Tbwa" },
  { image: wpp, imageAlt: "Wpp" },
  { image: yellowPages, imageAlt: "Yellow Pages" },
];

const brands: Client[] = [
  { image: aclu, imageAlt: "ACLU" },
  { image: aussie, imageAlt: "Aussie" },
  { image: bayliner, imageAlt: "Bayliner" },
  { image: blackDecker, imageAlt: "Black and Decker" },
  { image: blueMoon, imageAlt: "Blue Moon" },
  { image: boehringer, imageAlt: "Boehringer" },
  { image: bostonWhaler, imageAlt: "Boston Whaler" },
  { image: cemex, imageAlt: "Cemex" },
  { image: charmin, imageAlt: "Charmin" },
  { image: chrysler, imageAlt: "Chrysler" },
  { image: claro, imageAlt: "Claro" },
  { image: dairyQueen, imageAlt: "Dairy Queen" },
  { image: dodge, imageAlt: "Dodge" },
  { image: ducati, imageAlt: "Ducati" },
  { image: espaniaTurismo, imageAlt: "Oficina Española de Turismo" },
  { image: eukanuba, imageAlt: "Eukanuba" },
  { image: fiat, imageAlt: "Fiat" },
  { image: foodNetwork, imageAlt: "Food Network" },
  { image: garnier, imageAlt: "Garnier" },
  { image: gillette, imageAlt: "Gillette" },
  { image: honda, imageAlt: "Honda" },
  { image: isuzu, imageAlt: "Isuzu" },
  { image: jeep, imageAlt: "Jeep" },
  { image: joseCuervo, imageAlt: "Jose Cuervo" },
  { image: littleTikes, imageAlt: "Little Tikes" },
  { image: loreal, imageAlt: "Loreal" },
  { image: maybelline, imageAlt: "Maybelline" },
  { image: mazda, imageAlt: "Mazda" },
  { image: miele, imageAlt: "Miele" },
  { image: mopar, imageAlt: "Mopar" },
  { image: mortonSalt, imageAlt: "Morton Salt" },
  { image: nissan, imageAlt: "Nissan" },
  { image: nivea, imageAlt: "Nivea" },
  { image: oldSpice, imageAlt: "Old Spice" },
  { image: oliveGarden, imageAlt: "Olive Garden" },
  { image: pantene, imageAlt: "Pantene" },
  { image: petSmart, imageAlt: "Pet Smart" },
  { image: pizzaHut, imageAlt: "Pizza Hut" },
  { image: playtex, imageAlt: "Playtex" },
  { image: porsche, imageAlt: "Porsche" },
  { image: pumaEnergy, imageAlt: "Puma Energy" },
  { image: ram, imageAlt: "Ram" },
  { image: redLobster, imageAlt: "Red Lobster" },
  { image: ronaldMcDonalds, imageAlt: "Ronald McDonalds" },
  { image: royalCanin, imageAlt: "Royal Canin" },
  { image: sevenUp, imageAlt: "Seven Up" },
  { image: sizzler, imageAlt: "Sizzler" },
  { image: sonyMusicLatin, imageAlt: "Sony Music Latin" },
  { image: starbucks, imageAlt: "Starbucks" },
  { image: subway, imageAlt: "Subway" },
  { image: syfy, imageAlt: "SYFY" },
  { image: tacoBell, imageAlt: "Taco Bell" },
  { image: tdi, imageAlt: "Texas Department of Insurance" },
  { image: tMobile, imageAlt: "T Mobile" },
  { image: toyota, imageAlt: "Toyota" },
  { image: unitedWay, imageAlt: "United Way" },
  { image: walmart, imageAlt: "Walmart" },
  { image: webex, imageAlt: "Webex" },
  { image: wendys, imageAlt: "Wendys" },
  { image: weTv, imageAlt: "WE Tv" },
  { image: wma, imageAlt: "Womens March Action" },
  { image: ymca, imageAlt: "YMCA" },
];

/**
 * Returns an array with random non-repeating clients
 * alternating: Brand - Agency - Brand - Agency ...
 * @param {number} clientAmount - amount of random clients to get
 * @returns {Array}
 */
export function getRandomClients(clientAmount: number): Client[] {
  const randomClients = [];
  const prevBrandIndexes = [];
  const prevAgenciesIndexes = [];

  const evenClientAmount =
    clientAmount % 2 === 0 ? clientAmount : clientAmount + 1;

  const loopLimit = evenClientAmount / 2;

  for (let i = 1; i <= loopLimit; i++) {
    const areBrandsLeft = prevBrandIndexes.length < brands.length;
    const areAgenciesLeft = prevAgenciesIndexes.length < agencies.length;

    if (areBrandsLeft) {
      const brandsIndex = getRandomIndex(brands.length, prevBrandIndexes);
      prevBrandIndexes.push(brandsIndex);
      randomClients.push(brands[brandsIndex]);
    }

    if (areAgenciesLeft) {
      const agenciesIndex = getRandomIndex(
        agencies.length,
        prevAgenciesIndexes,
      );

      prevAgenciesIndexes.push(agenciesIndex);

      randomClients.push(agencies[agenciesIndex]);
    }
  }

  return randomClients.slice(0, clientAmount);
}

function getRandomIndex(limit = 1, prevIndexes: number[] = []): number {
  const randomIndex = Math.floor(Math.random() * limit);

  if (!prevIndexes.includes(randomIndex)) {
    return randomIndex;
  } else {
    return getRandomIndex(limit, prevIndexes);
  }
}
