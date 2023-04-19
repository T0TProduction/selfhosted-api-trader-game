import { Controller, Get, Param } from '@nestjs/common';
import { ResourceService } from '@/modules/resource/resource.service';
import { ResourceTypeDto } from './dto/ResourceType.dto';
import { ResourceStatisticDto } from './dto/ResourceStatistic.dto';
import { randomUUID } from 'crypto';

@Controller({ path: 'resource', version: '1' })
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get(':type')
  async getStatisticOfResource(
    @Param() params: ResourceTypeDto,
  ): Promise<ResourceStatisticDto> {
    const userId = randomUUID(); // TODO get the user id from the request
    return this.resourceService.getStatisticOfResource(params.type, userId);
  }

  @Get()
  getStatisticOfAllResources(): Promise<Array<ResourceStatisticDto>> {
    const userId = randomUUID(); // TODO get the user id from the request
    return this.resourceService.getStatisticOfAllResources(userId);
  }
}
