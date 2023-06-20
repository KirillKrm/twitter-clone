import { PartialType } from '@nestjs/mapped-types'

import { UpdateUserDtoI } from '@shared/user/dtos'

import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto
  extends PartialType(CreateUserDto)
  implements UpdateUserDtoI {}
