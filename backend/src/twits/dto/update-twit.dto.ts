import { PartialType } from '@nestjs/mapped-types'
import { UpdateTwitDtoI } from '@shared/twit/dtos'

import { CreateTwitDto } from './create-twit.dto'

export class UpdateTwitDto
  extends PartialType(CreateTwitDto)
  implements UpdateTwitDtoI {}
