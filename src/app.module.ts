import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './tables/Product';
import { ProductProperties } from './tables/ProductProperties';
import { User } from './tables/User';
import { ProductService } from './services/product/product.service';
import { UserService } from './services/user/user.service';
import { ProductpropertiesService } from './services/productproperties/productproperties.service';
import { ProductController } from './controllers/product/product.controller';
import { UserController } from './controllers/user/user.controller';
import { ProductpropertiesController } from './controllers/productproperties/productproperties.controller';
import { JwtModule } from '@nestjs/jwt';
import { Contact } from './tables/Contact';
import { ContactService } from './services/contact/contact.service';
import { ContactController } from './controllers/contact/contact.controller';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'floda_database',
      synchronize: false,
      entities: [User, Product, ProductProperties, Contact],
    }),
    TypeOrmModule.forFeature([User, Product, ProductProperties, Contact]),
    JwtModule.register({
      secret: 'Floda_Nest',
      signOptions: {expiresIn: '7d'}
    }),
  ],
  controllers: [AppController, ProductController, UserController, ProductpropertiesController, ContactController],
  providers: [AppService, ProductService, UserService, ProductpropertiesService, ContactService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes(UserController)
  }
}
