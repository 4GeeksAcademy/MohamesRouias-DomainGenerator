


//Genera dominios a partir de diferentes arreglos 
function DomainGenerator() {

  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  

  for (let pronoun in pronouns) {
    for (let adj in adjs) {
      for (let noun in nouns) {
        console.log(pronouns[pronoun] + adjs[adj] + nouns[noun] + ".com");
      }
    }
  }
}
DomainGenerator();

