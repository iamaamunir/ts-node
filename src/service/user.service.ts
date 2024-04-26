import { error } from 'console'
import userModel from '../models/user.model'
import userDocument from '../models/user.model'

export async function createUser(input:typeof userDocument) {
  try {
    return await userModel.create(input)
  }
  catch (e:any) {
    throw new Error(e)
  }
}
