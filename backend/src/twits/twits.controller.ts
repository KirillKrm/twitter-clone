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
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

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

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new twit',
    description: 'Creates a new twit with the provided data',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The twit has been successfully created',
    type: Twit,
  })
  async create(
    @CurrentUser() userJwtPayload: JwtPayload,
    @Body() createTwitDto: CreateTwitDto,
  ): Promise<Twit> {
    return this.twitsService.create(userJwtPayload.id, createTwitDto)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all twits',
    description: 'Retrieves all the existing twits',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved all twits',
    type: [Twit],
  })
  async findAll(): Promise<Twit[]> {
    return this.twitsService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get a twit by ID',
    description: 'Retrieves a twit based on the provided ID',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved the twit',
    type: Twit,
  })
  async findOne(@Param('id') id: number): Promise<Twit> {
    return this.twitsService.findOne(id)
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Update a twit by ID',
    description: 'Updates a twit based on the provided ID',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The twit has been successfully updated',
  })
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
  @ApiOperation({
    summary: 'Delete a twit by ID',
    description: 'Deletes a twit based on the provided ID',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The twit has been successfully deleted',
  })
  async remove(
    @CurrentUser() userJwtPayload: JwtPayload,
    @Param('id') twitId: number,
  ): Promise<void> {
    await this.twitsService.remove(userJwtPayload.id, twitId)
  }
}
