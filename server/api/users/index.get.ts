
import { getUsers } from '~/services/userService'

export default defineEventHandler(() => {
  return getUsers()
})
