import React from 'react'
import Provider from './Provider'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider>
        {children}
    </Provider>
  )
}

export default layout
