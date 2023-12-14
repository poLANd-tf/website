import { readFile } from 'fs/promises';
import { join } from 'path';

export const loadDocument = async (/** @type {string} */ name) => {
  const path = join('documents', `${name}.md`);
  try {
    return (await readFile(path)).toString();
  } catch (error) {
    console.error(error);
    return '';
  }
};
