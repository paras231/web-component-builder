import { FormTemp } from "./Templates";
/**
 * handeling the ui generation after dropping a particular element
 */

export function handleElementAfterDrop(element) {
  // generate the ui once element is dropped
  const { active, over } = element;
  if (active && active.id === 11) {
    return `
         ${FormTemp}
        `;
  }
}
