import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { PageBanner } from '../dist/lib/main.js'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <PageBanner
            // actions={actions}
            eyebrow="some eyebrow string"
            maxWidthPx={29}
            subtitle="some subtitle"
            supportingText="very supportive text"
            title="the title"
        />
    )
}

export default App
