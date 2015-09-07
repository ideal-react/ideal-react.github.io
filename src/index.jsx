import React from 'react'
import SpeechBubble from 'speech-bubble'
import styles from './index.css'

const props = {
	imageUrl: 'https://avatars0.githubusercontent.com/u/14071114',
	title: 'ideal',
	content: 'ideal is a organizations of perfect react component',
	link: 'https://github.com/ideal-react',
	styles,
}

React.render(<SpeechBubble {...props} />,
	document.getElementById('speech-bubble-wrap'))

