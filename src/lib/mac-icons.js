/**
 * Iconos estilo Macintosh (classic-mac-elements + custom)
 * @see https://github.com/danmorgandesigns/classic-mac-elements
 */

export const macIconMap = {
  terminal: "mac-system",
  menu: "menu",
  close: "stop",
  work: "folder",
  code: "macpaint",
  bolt: "sound",
  verified: "help",
  school: "scrapbook",
  mail: "mail",
  folder: "folder",
  arrow_outward: "next-arrow",
  link: "hand-right",
  github: "floppy",
  dark_mode: "moon",
  light_mode: "sun",
  apple: "apple",
  globe: "hypercard",
};

export function resolveMacIcon(name) {
  return macIconMap[name] ?? name;
}
