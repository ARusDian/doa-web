import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </>
    )

}
