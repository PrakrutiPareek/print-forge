export default function Home() {
  return (
    <main>
      <section  className="flex flex-col items-center justify-center text-center gap-8 px-6 py-12 mx-auto max-w-7xl md:flex-row">
       <div className="flex-1 space-y-6">
        <p className="hidden text-sm text-gray-600 uppercase md:block">Your go-to platform for 3D printing files</p>
        <h1 className="text-4xl font-bold md:text-5xl">Discover what’s possible with 3D printing</h1>
        <p className="text-lg text-gray-600">Join our community of creators and explore a vast library of user-submitted models.</p>
        <div className="flex gap-4">
        <button
          // href="/3d-models"
          className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
          >Browse models</button>
        </div>
       </div>
        <img src="/hero-img-circle.png" alt="hero image" width={350}/>
      </section>
    </main>
  )
   }
