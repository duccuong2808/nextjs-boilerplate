'use client';
import { useState, useEffect } from 'react'; // Import useEffect
import { useSearchParams } from 'next/navigation'; // Import useSearchParams


export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const searchParams = useSearchParams(); // Get search params
  const expectedPassword = searchParams.get('key'); // Get the 'key' parameter

  // Optional: Check immediately if the key matches a stored session/token
  // This part depends on how you want to handle returning users or session persistence
  // useEffect(() => {
  //   if (expectedPassword && expectedPassword === 'some_saved_token') {
  //     setIsAuthenticated(true);
  //   }
  // }, [expectedPassword]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if the expectedPassword exists and matches the entered password
    if (expectedPassword && password === expectedPassword) {
      setIsAuthenticated(true);
      setError('');
      // Optional: Store successful authentication state (e.g., sessionStorage)
    } else {
      // Provide a more generic error if the key param is missing or password is wrong
      setError('Incorrect password or access key.');
      // Clear the password field on error
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Optionally, you could show a different message if the 'key' parameter is missing
  // if (!expectedPassword) {
  //   return <div>Access key missing from URL.</div>;
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Enter Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            // Disable button if key param is missing
            disabled={!expectedPassword} 
          >
            Access CV 
          </button>
        </form>
      </div>
    </div>
  );
}