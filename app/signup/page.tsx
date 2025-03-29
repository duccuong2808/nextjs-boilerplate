export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <div className="p-6">
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
          Lando
        </a>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
            Create Account
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Create a password"
              />
            </div>
          
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Confirm your password"
              />
            </div>
          
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
              </label>
            </div>
          
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Account
            </button>
          </form>
        
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}