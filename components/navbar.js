import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar_parent'>
                <Link href="/" className><a className='Logo'>RoCoffee</a></Link>
                <div className='navbar_content'>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;