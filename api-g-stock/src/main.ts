import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('GStock API')
    .setDescription("Interface de documentation de GStock API")
    .setVersion('1.0.0')
    .addTag('Omega')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3131);
}
bootstrap();
