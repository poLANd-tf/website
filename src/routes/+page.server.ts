import { loadDocument } from '$lib/server/load-document';

export const load = async () => {
  return {
    about: {
      header: await loadDocument('about/header'),
      content: await loadDocument('about/content'),
    },
  };
};
