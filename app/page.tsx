import {authOptions} from "@/app/lib/nextAuth";
import {getServerSession} from "next-auth";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import SignInOrLogout from "@/app/_components/signInOrLogout";
import SessionsSelector from "@/app/_components/home/SessionsSelector";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <>
            <Header/>

            <section className="bg-gray-200 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {session?.user?.name ?? 'Guest'}</h2>
                    <SignInOrLogout/>
                </div>
            </section>

            <SessionsSelector />

            <section className="bg-purple-500 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
                    <p className="text-lg mb-6">Enhance your whatsapp business today!.</p>
                    <a href="https://www.cloudwa.net/console/register"
                       className="bg-white text-purple-500 px-6 py-3 rounded hover:bg-gray-200">Sign Up</a>
                </div>
            </section>

            <Footer/>
        </>
    );
}
