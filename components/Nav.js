import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <div>
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>


    </div>
  )
}
