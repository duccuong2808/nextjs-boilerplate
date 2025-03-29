export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center">
        <div className="text-2xl font-bold mr-12">Lando</div>
        <div className="hidden md:flex space-x-8 flex-1">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
          <a href="/cv" className="text-gray-600 hover:text-gray-900">CV</a>
          <a href="/typing" className="text-gray-600 hover:text-gray-900">Typing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-600 hover:text-gray-900">Log in</a>
          <a href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Sign up
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-16">
            <div className="text-gray-500 mb-4">- FREE 30 DAYS TRIAL</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
              The best way to showcase your project.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Here you can put a short description about your project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                Try for free
              </a>
              <a href="#" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50">
                See how it works
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/3d-illustration.png" 
                alt="3D Illustration" 
                className="relative w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-24 text-center">
          <p className="text-gray-600 mb-12">
            Trusted by individuals and teams at the world's best companies
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-2xl font-bold text-gray-300">
                Logo
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
