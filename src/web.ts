import { WebPlugin } from '@capacitor/core';

import type { SocketMobilePlugin } from './definitions';

export class SocketMobileWeb extends WebPlugin implements SocketMobilePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
