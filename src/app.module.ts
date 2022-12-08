import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [DatabaseModule, ClientsModule, ProductsModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
