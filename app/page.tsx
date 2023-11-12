import prisma from '@/lib/db'
import {default as mPrisma} from '@/lib/mongodb'

export default async function Home() {
  const posts = await prisma.post.findMany()
  const missions = await mPrisma.mission.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      <code>{JSON.stringify(posts, null, 2)}</code>
      <h1>Missions</h1>
      <code>{JSON.stringify(missions, null, 2)}</code>
    </main>
  )
}
