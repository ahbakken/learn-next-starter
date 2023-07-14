import Link from 'next/link'
export default function FirstPost() {
  return (
    <>
      <h1>How I met my gostosa wife</h1>
      <h2>
        {/*here Link is used to make the text link back to the main page*/}
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}
