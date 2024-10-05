import { test as base } from '@playwright/test'
import { Signup } from './classes/Signup'
import { Transaction } from './classes/Transaction'

interface UtilHQFixtures {
  transactions: Transaction
  signup: Signup
}

export const test = base.extend<UtilHQFixtures>({
  transactions: async ({ page }, use) => {
    await use(new Transaction(page))
  },
  signup: async ({ page }, use) => {
    await use(new Signup(page))
  },
})
