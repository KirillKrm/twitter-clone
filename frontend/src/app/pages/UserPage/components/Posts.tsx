import * as React from 'react'
import 'index.css'

import Twits from 'app/pages/FeedPage/components/Twits'

export function Posts(props: { userId: number }) {
  // const user = React.useContext(UserContext)

  // if (!user) {
  //   throw Error('YOU ARE NOT LOGGED')
  // }

  return (
    <div className={styles.container}>
      <Twits userId={props.userId} />
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
  `,
}
