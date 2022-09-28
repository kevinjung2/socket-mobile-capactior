import { registerPlugin } from '@capacitor/core';

import type { SocketMobilePlugin } from './definitions';

const SocketMobile = registerPlugin<SocketMobilePlugin>('SocketMobile', {
  web: () => import('./web').then(m => new m.SocketMobileWeb()),
});

export * from './definitions';
export { SocketMobile };
