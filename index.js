// Iteration 1: Names and Input
const hacker1 = "Mario";
console.log(`The drive's name is ${hacker1}`);
const hacker2 = "Sophia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longes name, it has ${hacker2.length} characters`
  );
} else {
  console.log(`Wow, you both have equally long names ${hacker1.length} `);
}
// Iteration 3: Loops
let formattedName = "";
//3.1
for (let hackerIndex = 0; hackerIndex < hacker1.length; hackerIndex += 1) {
  let uppercaseCharacters = hacker1[hackerIndex].toUpperCase();
  formattedName += uppercaseCharacters + " ";
}

console.log(formattedName);

//3.2
let reversedName = "";
for (
  let lastHackerIndex = hacker2.length - 1;
  lastHackerIndex >= 0;
  lastHackerIndex -= 1
) {
  let reversedLetters = hacker2[lastHackerIndex];
  reversedName += hacker2[lastHackerIndex];
}

console.log(reversedName);

// 3.3
let result = hacker1.localeCompare(hacker2);
if (result < 0) {
  console.log(`The driver's name goes first.`);
} else if (result > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What? You both have the same name?`);
}

//bonus time

//bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin interdum augue ut ullamcorper. Sed in scelerisque purus, a hendrerit risus. Vestibulum malesuada enim a arcu lacinia tempor. Aliquam fermentum mauris dui, id luctus sem consectetur molestie. Integer auctor ut metus vitae lacinia. Curabitur cursus accumsan consequat. Ut vulputate sollicitudin orci vitae molestie. Maecenas urna sem, dapibus non venenatis vitae, aliquet sit amet dui. Ut et viverra mi.

Pellentesque volutpat nisi in viverra vulputate. Ut a tortor convallis justo euismod consequat. Morbi tincidunt nibh nulla, sed fringilla mauris placerat at. Nulla scelerisque massa diam, vitae molestie purus auctor pretium. Sed non felis leo. Duis suscipit odio et ipsum semper scelerisque. Nunc porttitor eros elit, eu efficitur eros facilisis et. Aenean suscipit magna eget ipsum consequat pellentesque. Nam ut sapien in risus sodales sodales ut ut elit. Praesent faucibus turpis ex, id efficitur nibh sollicitudin tempus. Nulla tincidunt, elit sit amet hendrerit maximus, elit risus maximus ipsum, nec maximus turpis diam sed eros. Integer fermentum neque vel ex semper, eu fringilla nisl volutpat. Ut finibus leo mauris, quis tempus velit facilisis eget. Vivamus eget porttitor mauris. Vestibulum in sapien quis quam auctor eleifend a quis tellus. Proin cursus eros porttitor dui auctor porta.

Sed pellentesque urna non augue porta tempor. Aenean metus arcu, efficitur et sodales rhoncus, laoreet in purus. Praesent fermentum ex eget eros tincidunt, nec luctus libero sagittis. Praesent hendrerit convallis odio, ut scelerisque nisl suscipit vitae. Fusce feugiat est vitae elit posuere fringilla. Etiam tincidunt eu sapien sit amet finibus. Maecenas maximus sem vitae tellus efficitur luctus. In a nulla vel ipsum sollicitudin interdum. Nam rhoncus mattis magna, id imperdiet magna facilisis sed. Sed laoreet, tellus eu aliquam tincidunt, odio mauris sollicitudin quam, quis egestas nisl tellus eget tellus. Duis ipsum ligula, rhoncus sed convallis vel, ornare ut elit.`;
let wordCount = 0;
let etCount = 0;

for (let i = 0; i < longText.length; i += 1) {
  const twoChars = longText[i] + longText[i + 1];
  if (twoChars === "et") {
    etCount++;
  }
}

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    continue;
  }
  wordCount++;
  while (i < longText.length && longText[i] !== " ") {
    i++;
  }
}

/* simpler variation
for (i = 0; i < longText.length; i += 1) {
  if (longText[i] === " ") {
    wordCount++;
  }
}

console.log(wordCount + 1);
*/
console.log(etCount);
console.log(wordCount);

//bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";
let reversedPhrase = "";
let lowerCasePhrase = "";

for (let i = 0; i < phraseToCheck.length; i += 1) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    lowerCasePhrase += char;
  }
}

for (
  let indexOfStr = lowerCasePhrase.length - 1;
  indexOfStr >= 0;
  indexOfStr -= 1
) {
  reversedPhrase += lowerCasePhrase[indexOfStr];
}

if (reversedPhrase === lowerCasePhrase) {
  console.log(`The phrase is a palindrome.`);
} else {
  console.log(`The phrase is not a palindrome`);
}
