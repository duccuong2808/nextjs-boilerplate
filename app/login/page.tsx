export default function Login() {
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
            Welcome Back
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
              />
            </div>
          
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
          
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}