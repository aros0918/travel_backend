import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './api/cars/cars.module';
import { FileModule } from './api/file/file.module';
import { HotelsModule } from './api/hotels/hotels.module';
import { ImagesModule } from './api/images/images.module';
import { ReviewsModule } from './api/reviews/reviews.module';
import { TourAccessoriesModule } from './api/tour-accessories/tour-accessories.module';
import { ToursModule } from './api/tours/tours.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/db.config';
import { RidePlanModule } from './api/ride-plan/ride-plan.module';
import { CallBackModule } from './api/call-back/call-back.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    ToursModule,
    ReviewsModule,
    ImagesModule,
    CarsModule,
    HotelsModule,
    FileModule,
    TourAccessoriesModule,
    RidePlanModule,
    CallBackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }