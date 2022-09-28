export interface SocketMobilePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
