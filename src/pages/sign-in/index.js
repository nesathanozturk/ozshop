import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import useCartContext from "../../hooks/use-cart-context";
import Loading from "../../components/loading";
import { SignInIcon } from "../../components/icons";

const SignIn = () => {
  const { username, setUsername, email, setEmail, password, setPassword } =
    useCartContext();
  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  if (loading) return <Loading />;

  const handleLogin = () => {
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      signInWithEmailAndPassword(email, password);
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      alert("You signed in with Google!");
    });
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
          <button
            type="submit"
            className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center transition-colors"
            onClick={handleLogin}
          >
            Sign-In
          </button>
          <button
            type="button"
            className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            onClick={handleSignInWithGoogle}
          >
            <SignInIcon />
            Sign in with Google
          </button>
          <div className="text-sm font-medium text-gray-500">
            Don't have an account?
            <Link
              to="/sign-up"
              className="text-purple-700 hover:underline ml-1"
            >
              Create account!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
