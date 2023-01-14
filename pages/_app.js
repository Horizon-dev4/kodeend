
import '../styles/blog.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  )
}
