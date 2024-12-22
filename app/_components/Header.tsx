import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-purple-800">CloudWA</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
                        <li><a href="https://cloudwa.net/console" className="text-gray-600 hover:text-gray-800">Console</a></li>
                        <li><a href="https://www.cloudwa.net/console/register" className="text-gray-600 hover:text-gray-800">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;