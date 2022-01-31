import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './configuration/configuration.module';
import { CustomConfigService } from './configuration/configuration.service';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    CustomConfigModule,
    GroupsModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomConfigService],
})
export class AppModule {}
