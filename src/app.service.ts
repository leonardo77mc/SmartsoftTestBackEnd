import { Injectable } from '@nestjs/common';

/**
 * @ignore
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
