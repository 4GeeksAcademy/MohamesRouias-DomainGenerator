


//write your code here
function DomainGenerator() {

  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  //freestyle
  let domains = [".com", ".es", ".net"];

  for (let pronoun in pronouns) {
    for (let adj in adjs) {
      for (let noun in nouns) {
        console.log(pronouns[pronoun] + adjs[adj] + nouns[noun] + ".com");
      }
    }
  }
}
DomainGenerator();

