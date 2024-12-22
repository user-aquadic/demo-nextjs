function Footer () {
    return (
        <footer className="">
            <div className="bg-purple-800 h-44">
                <div className="container mx-auto flex flex-col items-center justify-center gap-3 pt-7">
                    <h1 className="text-white text-2xl">Join Us Today!</h1>
                    <p className="text-white">Enhance your whatsapp business today!.</p>
                    <a href="https://www.cloudwa.net/console/register" className="w-16 flex justify-center text-purple-500 bg-white text-sm p-1 rounded-sm">
                        Sign Up
                    </a>
                </div>
            </div>
            <div className="bg-gray-800 py-3">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">&copy; 2025 CloudWA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;