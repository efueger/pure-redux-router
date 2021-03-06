// @flow
import type { Action, ReceivedAction } from '../flow-types'


export default (action: Action | ReceivedAction): boolean =>
  !!(action.meta && action.meta.location && action.meta.location.current)
