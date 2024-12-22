// import Link from 'next/link';

function Navbar () {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <a className='text-2xl font-bold text-purple-800' href="/" >CloudWA</a>
    
                <div className="hidden md:flex gap-3">
                    <a  className="text-gray-600 hover:text-gray-800" href="">Home</a>
                    <a  className="text-gray-600 hover:text-gray-800" href="https://cloudwa.net/console">Console</a>
                    <a  className="text-gray-600 hover:text-gray-800" href="https://www.cloudwa.net/console/register">Sign Up</a>
                </div>
    
            <div className="md:hidden">
                <button className="text-gray-600 hover:text-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                </button>
            </div>
            </div>
        </nav>
    );
}

export default Navbar