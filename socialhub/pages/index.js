import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={{
        pathname: '/[username]',
        query: {username: 'qnbie123'},
      }}>
        qnbie's page
      </Link>
    </div>
  )
}
