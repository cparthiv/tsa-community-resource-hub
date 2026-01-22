import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const likesFilePath = path.join(process.cwd(), 'data', 'likes.json')

// Ensure data directory exists
if (!fs.existsSync(path.dirname(likesFilePath))) {
  fs.mkdirSync(path.dirname(likesFilePath), { recursive: true })
}

// Initialize likes file if it doesn't exist
if (!fs.existsSync(likesFilePath)) {
  fs.writeFileSync(likesFilePath, JSON.stringify({}))
}

function readLikes(): Record<string, number[]> {
  try {
    const data = fs.readFileSync(likesFilePath, 'utf8')
    return JSON.parse(data)
  } catch {
    return {}
  }
}

function writeLikes(likes: Record<string, number[]>): void {
  fs.writeFileSync(likesFilePath, JSON.stringify(likes, null, 2))
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  const likes = readLikes()
  const likeCounts: Record<string, number> = {}
  const userLikes: string[] = []

  // Convert user arrays to counts
  Object.keys(likes).forEach(resourceId => {
    likeCounts[resourceId] = likes[resourceId].length
    if (userId && likes[resourceId].includes(parseInt(userId))) {
      userLikes.push(resourceId)
    }
  })

  return NextResponse.json({
    counts: likeCounts,
    userLikes: userLikes
  })
}

export async function POST(request: NextRequest) {
  const { resourceId, userId } = await request.json()

  if (!resourceId || !userId) {
    return NextResponse.json({ error: 'Missing resourceId or userId' }, { status: 400 })
  }

  const likes = readLikes()
  const resourceLikes = likes[resourceId] || []

  const userIndex = resourceLikes.indexOf(parseInt(userId))

  if (userIndex > -1) {
    // User already liked, remove like (unlike)
    resourceLikes.splice(userIndex, 1)
  } else {
    // User hasn't liked, add like
    resourceLikes.push(parseInt(userId))
  }

  if (resourceLikes.length > 0) {
    likes[resourceId] = resourceLikes
  } else {
    delete likes[resourceId]
  }

  writeLikes(likes)

  return NextResponse.json({
    liked: userIndex === -1, // true if now liked, false if unliked
    count: resourceLikes.length
  })
}