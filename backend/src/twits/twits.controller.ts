import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'

import { JwtPayload } from '../auth/types'
import { AuthGuard } from '../auth/auth.guard'
import { CurrentUser } from '../common/decorators'

import { TwitsService } from './twits.service'
import { CreateTwitDto } from './dto/create-twit.dto'
import { UpdateTwitDto } from './dto/update-twit.dto'
import { Twit } from './twit.entity'

@Controller({
  path: 'twits',
  version: '1',
})
export class TwitsController {
  constructor(private readonly twitsService: TwitsService) {}

  // @Get('test')
  // @UseGuards(AuthGuard)
  // @HttpCode(HttpStatus.OK)
  // async test(@CurrentUser() user: JwtPayload) {
  //   return user
  // }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  // TODO @ApiOperation()
  async create(
    @CurrentUser() userJwtPayload: JwtPayload,
    @Body() createTwitDto: CreateTwitDto,
  ): Promise<Twit> {
    return this.twitsService.create(userJwtPayload.id, createTwitDto)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  // TODO @ApiOperation()
  async findAll(): Promise<Twit[]> {
    return this.twitsService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  // TODO @ApiOperation()
  async findOne(@Param('id') id: number): Promise<Twit> {
    return this.twitsService.findOne(id)
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  // TODO @ApiOperation()
  async update(
    @CurrentUser() userJwtPayload: JwtPayload,
    @Param('id') twitId: number,
    @Body() updateTwitDto: UpdateTwitDto,
  ): Promise<void> {
    await this.twitsService.update(userJwtPayload.id, twitId, updateTwitDto)
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  // TODO @ApiOperation()
  async remove(
    @CurrentUser() userJwtPayload: JwtPayload,
    @Param('id') twitId: number,
  ): Promise<void> {
    await this.twitsService.remove(userJwtPayload.id, twitId)
  }
}
