export function removeTags(text: string) {
  return text
    .replace("<p>", "")
    .replace("<b>", "")
    .replace("</p>", "")
    .replace("</b>", "");
}
