import React from 'react'
import SpeechBubble from 'speech-bubble'
import speechBubbleStyles from './speech-bubble.css'
import AutoEllipsis from 'auto-ellipsis'
import autoEllipsisStyles from './auto-ellipsis.css'
import './index.css'

let props = {
	imageUrl: 'https://avatars0.githubusercontent.com/u/14071114',
	title: 'ideal',
	content: 'ideal is a organizations of perfect react component',
	link: 'https://github.com/ideal-react',
	styles: speechBubbleStyles,
}

React.render(<SpeechBubble {...props} />,
	document.getElementById('speech-bubble-wrap'))

props = {
	content: 'auto-ellipsis is a React component for truncation when content overlength. It use DOM range to compute the ideal endPoint of content.',
	styles: autoEllipsisStyles,
}

React.render(<AutoEllipsis {...props} />,
	document.getElementById('auto-ellipsis-wrap'))

