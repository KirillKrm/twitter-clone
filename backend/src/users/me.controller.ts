import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'

import { AuthGuard } from '@backend/auth/auth.guard'
import { CurrentUser } from '@backend/common/decorators'
import { JwtPayload } from '@shared/auth/types'

import { UsersService } from './users.service'
import { User } from './user.entity'
import { UpdateUserDto } from './dto/update-user.dto'

@ApiTags('me')
@Controller({
  path: 'me',
  version: '1',
})
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class MeController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get current user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns the current user',
    type: User,
  })
  // TODO api operation, apiresponse documentation
  async getMe(@CurrentUser() userJwtPayload: JwtPayload): Promise<User> {
    return this.usersService.findOne(userJwtPayload.id)
  }

  // @Patch()
  // @HttpCode(HttpStatus.NO_CONTENT)
  // @ApiOperation({ summary: 'Update current user' })
  // @ApiResponse({
  //   status: HttpStatus.NO_CONTENT,
  //   description: 'Current user updated successfully',
  // })
  // async update(
  //   @CurrentUser() userJwtPayload: JwtPayload,
  //   updateUserDto: UpdateUserDto,
  // ): Promise<void> {
  //   await this.usersService.update(userJwtPayload.id, updateUserDto)
  // }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete current user' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Current user deleted successfully',
  })
  async deleteMe(@CurrentUser() userJwtPayload: JwtPayload): Promise<void> {
    await this.usersService.remove(userJwtPayload.id)
  }
}
