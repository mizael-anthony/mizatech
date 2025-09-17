// Company and personal information constants
// This file contains all static company and personal information to avoid duplication
// across different language versions and components

export const COMPANY_INFO = {
  // Company details
  name: "Mizatech",
  fullName: "Mizatech LLC",

  // Contact information
  email: "mizatech@mizael.pro",
  contactEmail: "mizaelanthony07@gmail.com", // For internal contact form submissions
  phone: "+261 34 36 457 86",

  // Address information
  address: "117 South Lexington Street Ste 100 Harrisonville, MO 64701",

  // Legal information
  director: "RAKOTOMANGA Mamy Henintsoa Anthony",
  registration: "37-2192736",

  // Other constants
  tagline: {
    en: "Building the future, one line of code at a time.",
    fr: "Construire l'avenir, une ligne de code à la fois."
  }
} as const