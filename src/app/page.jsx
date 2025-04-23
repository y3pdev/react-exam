import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap-content border-2 border-red-500 w-full max-w-[1280px]">
          <div className="inner-page">
            <h1>Welcome to the Home Page MANAT</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}