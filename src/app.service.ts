import { Injectable } from '@nestjs/common';

import { name } from '~@common/constant';

@Injectable()
export class AppService {
  root(): string {
    return `Hello ${name}`;
  }
}
