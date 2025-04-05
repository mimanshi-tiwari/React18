import React from 'react'
import ReactDOM from 'react-dom/client'

const header = React.createElement('div', {id: 'header'}, 'This is div')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(header)