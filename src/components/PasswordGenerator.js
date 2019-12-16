export const generatePassword = (options) => {
  const randomSort = () => 0.5 - Math.random()
  const chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    symbols: "!@#$%&*",
    numbers: "1234567890"
  }

  let charset = Object.keys(options.chars)
    .filter(char => options.chars[char] && char !== "symbols")

  let symbolCount = (!options.formats.easyToSay && options.chars.symbols) ?
    Math.round(0.2 * options.length) : 0

  if (options.formats.easyToSay) {
    charset = charset.filter(char => (char != "numbers")).map(char => chars[char])
  } else if (options.formats.easyToRead) {
    charset = charset.map(char => chars[char].replace(/[il10oILO]/g, ''))
  } else {
    charset = charset.map(char => chars[char])
  }

  let allCharCount = options.length - symbolCount

  const generatedSymbol = chars.symbols.split("")
    .sort(randomSort).slice(0, symbolCount).join("")

  let generated = ""
  while (generated.length < allCharCount) {
    charset.forEach(function(char) {
      if (generated.length < allCharCount) {
        generated += char.charAt(Math.floor(Math.random() * char.length))
      }
    })
  }

  generated += generatedSymbol
  generated = generated.split('').sort(randomSort).join('')

  return generated
}