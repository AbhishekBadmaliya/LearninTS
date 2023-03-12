interface Namepro{
  firstName: string,
  lastName: string
}

let harshil = (namepro: Namepro) => {
  console.log(namepro.firstName);
  console.log(namepro.lastName);
}

harshil({
  firstName: "Baba",
  lastName: "Bebo"
});
