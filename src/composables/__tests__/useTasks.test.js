import { describe, it, expect, vi } from 'vitest'
import { getDaysLeft, checkTaskStatus } from '../useTasks'

describe('Система управління задачами', () => {

  it('Має повертати 0, якщо дедлайн сьогодні', () => {
    expect(getDaysLeft(0)).toBe(0)
  })

  it('Має повертати 2, якщо дедлайн післязавтра', () => {
    expect(getDaysLeft(1.2)).toBe(2)
  })

  it('Має повертати null для минулого дедлайну', () => {
    expect(getDaysLeft(-5)).toBeNull()
  })

  it('Має повертати число менше 10', () => {
    expect(getDaysLeft(5)).toBeLessThan(10)
  })

  it('Має повертати ціле число', () => {
    expect(getDaysLeft(4.1)).toBe(5)
  })

  it('Має коректно працювати з Mock API', async () => {

    const mockApi = {
      getStatus: vi.fn(() => 'done')
    }

    const result = await checkTaskStatus(mockApi)

    expect(result).toBe('done')
  })

})
