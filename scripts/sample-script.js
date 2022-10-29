// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Crud = await hre.ethers.getContractFactory("Crud");
  const CRUD = await Crud.deploy();

  await CRUD.deployed();

  console.log("Crud deployed to:", CRUD.address);

  // console.log(Number(await CRUD.totalEmployees()));

  // await CRUD.createEmp(
  //   "A101",
  //   "Suman",
  //   "sumanchakra8145@gmail.com",
  //   23,
  //   "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  // );

  // await CRUD.createEmp(
  //   "A102",
  //   "SUMANA",
  //   "sumana@gmail.com",
  //   22,
  //   "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  // );

  // console.log(Number(await CRUD.totalEmployees()));

  // console.log(await CRUD.employees(0));
  // console.log(await CRUD.employees(1));


  // await CRUD.updateEmp(
  //   "A102",
  //   "SUMANA2",
  //   "sumana2@gmail.com",
  //   22,
  //   "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  // );

  // console.log(await CRUD.employees(0));
  // console.log(await CRUD.employees(1));

  // await CRUD.deleteEmp("A101");

  //   console.log(await CRUD.employees(0));
  // console.log(await CRUD.employees(1));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  //Crud deployed to: 0xD41f3C109ce267C2D244a7A2E35B9b5A2E3ad1CC
