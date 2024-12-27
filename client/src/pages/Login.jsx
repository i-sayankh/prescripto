import { useState } from "react"

/**
 * Login/Signup Component
 * Provides a form interface for user authentication with toggle between login and signup modes
 * Includes form validation and responsive design with Tailwind CSS
 */
const Login = () => {
  // State management for form mode (Sign Up/Login)
  const [state, setState] = useState('Sign Up');
  // State management for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  /**
   * Handle form submission
   * Prevents default form behavior
   * TODO: Implement authentication logic
   */
  const onSubmitHander = async (e) => {
    e.preventDefault();
  }

  return (
    // Main form container with vertical centering
    <form onSubmit={onSubmitHander} className="min-h-[80vh] flex items-center">
      {/* Form card with responsive width and styling */}
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        {/* Dynamic header based on current state */}
        <p className="text-2xl font-semibold">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p>Please {state === 'Sign Up' ? 'Sign up' : 'Sign in'} up to book an appointment</p>

        {/* Conditional rendering of name field for Sign Up mode */}
        {state === 'Sign Up' && <div className="w-full">
          <p>Full Name</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>}

        {/* Email input field */}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/* Password input field */}
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        {/* Submit button with dynamic text */}
        <button className="bg-primary text-white w-full py-2 rounded-md text-base" type="submit">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle between Sign Up and Login modes */}
        {
          state === 'Sign Up'
            ? <p>
              Already have an account?
              <span className="text-primary underline cursor-pointer" onClick={() => setState('Login')}>
                Login here
              </span>
            </p>
            : <p>
              Don&apos;t have an account?
              <span className="text-primary underline cursor-pointer" onClick={() => setState('Sign Up')}>
                Create new account
              </span>
            </p>
        }
      </div>
    </form>
  )
}

export default Login