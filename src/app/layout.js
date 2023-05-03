import './globals.css'

export const meta = {
  title: 'itaReport',
}

export default function RootLayout({ children, props }) {
  return (
    <html lang="pt-br">
      <title key="title">{meta.title}</title>
      <body>{children}</body>
    </html>
  )
}
