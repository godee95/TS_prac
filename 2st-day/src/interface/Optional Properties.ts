interface CraftBeer2 {
    name: string;
    hop?: number;
  }
  
  let myBeer2 = {
    name: "Saporo",
    // hop: 34
  };
  
  function brewBeer(beer: CraftBeer2) {
    console.log(beer.name); // Saporo
    // console.log(beer.hop); // 34
  }
  
  brewBeer(myBeer);