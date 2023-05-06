import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieve a list of all users.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all users.',
    type: [User],
  })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get user by ID',
    description: 'Retrieve a user by their ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved user.',
    type: User,
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

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete user by ID',
    description: 'Delete a user by their ID.',
  })
  @ApiResponse({ status: 204, description: 'Successfully deleted user.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id)
  }
}
