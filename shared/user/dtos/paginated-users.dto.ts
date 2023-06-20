import { PaginatedOffsetStrategyI } from '@shared/common/backend/dtos'

import { UserI } from '../types'

export interface PaginatedUsersI extends PaginatedOffsetStrategyI<UserI> {}
