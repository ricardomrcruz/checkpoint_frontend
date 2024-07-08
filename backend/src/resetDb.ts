import { db } from "./db";
import { Country } from "./entities/Country";
import { Continent } from "./entities/Continent";

async function cleadDb() {
  const runner = db.createQueryRunner();
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS ${entity.tableName}`)
    )
  );
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await cleadDb();

  const europe = await Continent.create({ name: "Europe" }).save();
  const asia = await Continent.create({ name: "Asia" }).save();
  const oc = await Continent.create({ name: "Oceania" }).save();
  const africa = await Continent.create({ name: "Africa" }).save();
  const na = await Continent.create({ name: "North America" }).save();
  const sa = await Continent.create({ name: "South America" }).save();

  const france = Country.create({
    name: "France",
    code: "FR",
    emoji: "😀", // Grinning Face
  });
  const china = Country.create({
    name: "China",
    code: "CN",
    emoji: "🎉", // Party Popper
  });
  const canada = Country.create({
    name: "Canada",
    code: "CA",
    emoji: "🚀", // Rocket
  });
  const aus = Country.create({
    name: "Australia",
    code: "AU",
    emoji: "🐱", // Cat Face
  });
  const kenya = Country.create({
    name: "Kenya",
    code: "KE",
    emoji: "🍕", // Pizza
  });
  const brazil = Country.create({
    name: "Brazil",
    code: "BR",
    emoji: "⚽", // Soccer Ball
  });

  france.continent = europe;
  china.continent = asia;
  canada.continent = na;
  aus.continent = oc;
  kenya.continent = africa;
  brazil.continent = sa;

  await france.save();
  await china.save();
  await canada.save();
  await aus.save();
  await kenya.save();
  await brazil.save();

  console.log("done !");
}

main();
