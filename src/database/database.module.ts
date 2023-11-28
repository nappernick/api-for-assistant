import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// ! This is called a "dynamic module" and is built to handle our
// very strange setup of each customer having their own DB
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const db = configService.get<string>('USE_DB'); // 'db1', 'db2', or 'db3'
        return {
          type: 'mariadb',
          host: configService.get<string>(`${db}_HOST`),
          port: configService.get<number>(`${db}_PORT`),
          username: configService.get<string>(`${db}_USER`),
          password: configService.get<string>(`${db}_PASSWORD`),
          database: configService.get<string>(`${db}_NAME`),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
