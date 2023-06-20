import { ApiProperty } from '@nestjs/swagger'

import { ExceptionResponseI } from '@shared/common/backend/dtos'

// No need to use class-validator cus it's not used anywhere
// except documentation
export class ExceptionResponseDto implements ExceptionResponseI {
  @ApiProperty()
  statusCode: number

  @ApiProperty()
  message: string

  @ApiProperty()
  error: string
}
