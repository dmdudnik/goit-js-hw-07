function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(" ");
  let longestWord = 0;
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  console.log(longestWord);
  // Пиши код выше этой строки
}
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");
