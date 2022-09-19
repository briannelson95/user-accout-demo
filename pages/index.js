import { useSession, getSession, signIn, signOut, unstable_getServerSession } from "next-auth/react"
import { authOptions } from 'pages/api/auth/[...nextauth]'

export default function LoginButton({ /*session*/ }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}


// export async function getServerSideProps(context) {
//   const session = await unstable_getServerSession(context.req, context.res, authOptions)
  
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/api/auth/signin',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {
//       session,
//     }
//   }
// }