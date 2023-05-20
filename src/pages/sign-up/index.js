import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useCartContext from "../../hooks/use-cart-context";
import { auth } from "../../firebase";
import Loading from "../../components/loading";

const SignUp = () => {
  const { username, setUsername, email, setEmail, password, setPassword } =
    useCartContext();
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (loading) return <Loading />;

  if (error) return console.log("Error:", error);

  const handleSignUp = () => {
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      createUserWithEmailAndPassword(email, password);
      alert("You have successfully signed up!");
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-3xl font-semibold text-gray-900">Sign-Up</h5>
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
              className="bg-gray-50 border focus:border-purple-600 border-gray-300 focus:outline-none text-gray-900 font-semibold text-sm rounded block w-full p-2.5"
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
              className="bg-gray-50 border focus:border-purple-600 border-gray-300 focus:outline-none text-gray-900 font-semibold text-sm rounded block w-full p-2.5"
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
              className="bg-gray-50 border focus:border-purple-600 border-gray-300 focus:outline-none text-gray-900 font-semibold text-sm rounded block w-full p-2.5"
              required
              max={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center transition-colors"
            onClick={handleSignUp}
          >
            Sign-Up
          </button>
          <div className="text-sm font-medium text-gray-500">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-purple-700 hover:underline ml-1"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
