import { Controller, Get, HostParam } from '@nestjs/common';

@Controller('account')
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
