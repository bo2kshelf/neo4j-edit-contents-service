import {Module} from '@nestjs/common';
import {IDModule} from '../common/id/id.module';
import {
  LabeledBookReturnTypeResolver,
  LabelsResolver,
} from './resolvers/labels.resolver';
import {LabelsService} from './services/labels.service';

@Module({
  imports: [IDModule],
  providers: [LabelsService, LabelsResolver, LabeledBookReturnTypeResolver],
  exports: [LabelsService],
})
export class LabelsModule {}
