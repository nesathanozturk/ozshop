import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import useCartContext from "../../hooks/use-cart-context";
import Loading from "../../components/loading";

const SignIn = () => {
  const { username, setUsername, email, setEmail, password, setPassword } =
    useCartContext();
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) return console.log("Error:", error);

  if (loading) return <Loading />;

  const handleLogin = () => {
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      signInWithEmailAndPassword(email, password);
      alert("You have successfully signed in!");
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-3xl font-semibold text-gray-900">Sign-In</h5>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-base font-semibold text-gray-900"
            >
              Username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 focus:border-purple-600 focus:outline-none text-gray-900 font-semibold text-sm rounded block w-full p-2.5"
              placeholder="Your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 focus:border-purple-600 focus:outline-none text-gray-900 font-semibold text-sm rounded block w-full p-2.5"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-semibold text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="bg-gray-50 border border-gray-300 focus:border-purple-600 focus:outline-none text-gray-900 font-semibold text-sm rounded block w-full p-2.5"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-800"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center transition-colors"
            onClick={handleLogin}
          >
            Sign-In
          </button>
          <div className="text-sm font-medium text-gray-500">
            Don't have an account?
            <Link
              to="/sign-up"
              className="text-purple-700 hover:underline ml-1"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
