import Theme from '../styles/theme';
import '../components/Experience/ExperienceStyles.css';
import "../components/Contact/ContactStyles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 