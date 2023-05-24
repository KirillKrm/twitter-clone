import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'

import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import { ExceptionResponseDto } from '../common/dto'

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieve a list of all users.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved all users.',
    type: [User],
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Users not found.',
    type: ExceptionResponseDto,
  })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get user by ID',
    description: 'Retrieve a user by their ID.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved user.',
    type: User,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
    type: ExceptionResponseDto,
  })
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id)
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<void> {
  //   await this.usersService.update(id, updateUserDto)
  // }

  // TODO add admin guard
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete user by ID',
    description: 'Delete a user by their ID.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Successfully deleted user.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
    type: ExceptionResponseDto,
  })
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.remove(id)
  }
}
