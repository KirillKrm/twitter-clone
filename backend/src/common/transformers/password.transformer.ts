import { ValueTransformer } from 'typeorm'
import { Hash } from '../lib/hash'

export class PasswordTransformer implements ValueTransformer {
  to(value) {
    return Hash.make(value)
  }

  from(value) {
    return value
  }
}
