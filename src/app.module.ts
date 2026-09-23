import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller.js';
import { AccountController } from './account/account.controller.js';
import { CatsModule } from './cats/cats.module.js';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController, AdminController, AccountController],
  providers: [AppService],
})
export class AppModule {}
