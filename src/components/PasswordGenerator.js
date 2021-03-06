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

  // calculate symbol char must be 20% of password length
  let symbolCount = (!options.formats.easyToSay && options.chars.symbols) ?
    Math.round(0.2 * options.length) : 0

  if (options.formats.easyToSay) {
    // remove number and symbol
    charset = charset.filter(char => (char != "numbers")).map(char => chars[char])
  } else if (options.formats.easyToRead) {
    // remove ambigu char like i L 1 0 o I L O
    charset = charset.map(char => chars[char].replace(/[il10oILO]/g, ''))
  } else {
    charset = charset.map(char => chars[char])
  }

  let allCharCount = options.length - symbolCount
      symbolCount = (charset.length === 0) ? options.length : symbolCount

  let generatedSymbol = ""
  if (symbolCount > 0) {
    while (generatedSymbol.length < symbolCount) {
      generatedSymbol += chars.symbols.charAt(Math.floor(Math.random() * chars.symbols.length))
    }
  }

  let generated = ""
  if (charset.length > 0) {
    while (generated.length < allCharCount) {
      charset.forEach(function(char) {
        if (generated.length < allCharCount) {
          generated += char.charAt(Math.floor(Math.random() * char.length))
        }
      })
    }
  }

  generated += generatedSymbol
  generated = generated.split('').sort(randomSort).join('')

  return generated
}