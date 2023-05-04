import { PickType } from '@nestjs/mapped-types'

import { CreateUserDto } from '../../users/dto/create-user.dto'

// TODO accourding to frontend form
export class RegisterDto extends PickType(CreateUserDto, [
  'email',
  'password',
  'username',
]) {}
