# Kuui (Beta)

## Tools

![TypeScript](https://img.shields.io/badge/-TypeScript-000?style=for-the-badge&logo=TypeScript&logoColor=2f74c0)
![SCSS](https://img.shields.io/badge/-SCSS-000?style=for-the-badge&logo=SASS&logoColor=c76393)
![Vite](https://img.shields.io/badge/-Vite-000?style=for-the-badge&logo=Vite)
![React](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=React&logoColor=5ed3f3)

## Install

```powershell
npm install kuui-react
```

## Quick start

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'kuui-react/styles'
import { Button } from 'kuui-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Button dimension='medium' variant='passive'>
		Click me
	</Button>
)
```