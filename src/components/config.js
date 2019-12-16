export const defaultState = {
  password: '',
  length: 8,
  formats: {
    easyToSay: false,
    easyToRead: false,
    allCharacters: true,
  },
  formatRadio: [
    { name: "Easy to say", checked: false, id: "easyToSay" },
    { name: "Easy to read", checked: false, id: "easyToRead" },
    { name: "All characters", checked: true, id: "allCharacters" }
  ],
  chars: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  },
  charCheckbox: [
    { name: "Uppercase", checked: true, id: "uppercase" },
    { name: "Lowercase", checked: true, id: "lowercase" },
    { name: "Numbers", checked: true, id: "numbers" },
    { name: "Symbols", checked: true, id: "symbols" }
  ]
}