export function getDaysLeft(days) {
  if (days < 0) {
    return null
  }

  return Math.ceil(days)
}

export async function checkTaskStatus(api) {
  return await api.getStatus()
}
