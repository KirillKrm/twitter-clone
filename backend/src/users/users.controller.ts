import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'

import { ExceptionResponseDto } from '../common/dto'
import { AuthGuard } from '../auth/auth.guard'

import { UsersService } from './users.service'
import { User } from './user.entity'
import { GetUsersQuery } from './dto/get-users-query.dto'
import { PaginatedUsers } from './dto/paginated-users.dto'
import { UpdateUserDto } from './dto/update-user.dto'

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
    summary: 'Get all users with offset pagination',
    description: 'Retrieve a list of all users with offset pagination',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved all users.',
    type: PaginatedUsers,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Users not found.',
    type: ExceptionResponseDto,
  })
  async findAll(@Query() queries: GetUsersQuery): Promise<PaginatedUsers> {
    return this.usersService.findAll(queries)
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
  // TODO add admin guard
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<void> {
  //   await this.usersService.update(id, updateUserDto)
  // }

  // @Delete(':id')
  // @UseGuards(AuthGuard) // TODO add admin guard
  // @HttpCode(HttpStatus.NO_CONTENT)
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Delete user by ID',
  //   description: 'Delete a user by their ID.',
  // })
  // @ApiResponse({
  //   status: HttpStatus.NO_CONTENT,
  //   description: 'Successfully deleted user.',
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   description: 'User not found.',
  //   type: ExceptionResponseDto,
  // })
  // async remove(@Param('id') id: number): Promise<void> {
  //   await this.usersService.remove(id)
  // }
}
