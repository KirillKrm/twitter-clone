import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div style="margin: auto;">
      <h1 style="margin: 10px 10px;">Hello World!</h1>
      <h3><a href="/docs">Docs</a> </h3>
      <h3><a href="/api">Api</a> </h3>
    </div>
    `
  }
}
