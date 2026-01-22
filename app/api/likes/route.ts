
const userLikes = new Map<string, Set<number>>()


function getLikeCounts() {
  const counts = new Map<number, number>()
  for (const [userId, resources] of userLikes) {
    for (const resourceId of resources) {
      counts.set(resourceId, (counts.get(resourceId) || 0) + 1)
    }
  }
  return Object.fromEntries(counts)
}

export async function GET() {
  const counts = getLikeCounts()
  return Response.json(counts)
}

export async function POST(request: Request) {
  const { resourceId, userId }: { resourceId: number; userId: string } = await request.json()

  if (!userLikes.has(userId)) {
    userLikes.set(userId, new Set())
  }

  const userSet = userLikes.get(userId)!
  const wasLiked = userSet.has(resourceId)

  if (wasLiked) {
    userSet.delete(resourceId)
  } else {
    userSet.add(resourceId)
  }

  const counts = getLikeCounts()
  const newCount = counts[resourceId] || 0

  return Response.json({ liked: !wasLiked, count: newCount })
}