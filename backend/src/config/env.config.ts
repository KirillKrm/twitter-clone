import { IsDefined, IsNumberString, IsString } from 'class-validator'

export class EnvConfigSchema {
  @IsDefined()
  @IsNumberString()
  PORT: string

  @IsDefined()
  @IsString()
  GENERAL_SECRET: string

  @IsDefined()
  @IsString()
  JWT_SECRET: string

  @IsDefined()
  @IsNumberString()
  JWT_ACCESS_EXPIRE: number

  @IsDefined()
  @IsString()
  JWT_REFRESH_SECRET: string

  @IsDefined()
  @IsNumberString()
  JWT_REFRESH_EXPIRE: number

  @IsDefined()
  @IsString()
  DB_TYPE: string

  @IsDefined()
  @IsString()
  DB_HOST: string

  @IsDefined()
  @IsNumberString()
  DB_PORT: number

  @IsDefined()
  @IsString()
  DB_USERNAME: string

  @IsDefined()
  @IsString()
  DB_PASSWORD: string

  @IsDefined()
  @IsString()
  DB_DATABASE: string
}
