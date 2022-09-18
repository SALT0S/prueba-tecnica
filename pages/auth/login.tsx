import Link from "next/link";
import { AuthLayout } from "../../components/layouts/";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" pageDescription="Login to your account">
      <div className="container mx-auto  md:max-w-md md:px-8">
        <h1 className="text-3xl font-semibold">Sing In</h1>
        <form className="mt-4">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
              />

              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-password"
                type="password"
              />

              <button
                className="focus:shadow-outline my-2 w-full rounded-full bg-black py-2 px-4 text-sm font-bold uppercase text-white hover:bg-gray-700 focus:outline-none"
                type="button"
              >
                Sign In
              </button>

              <span className="my-8 flex items-center justify-center gap-3 font-medium text-gray-500 before:h-[1px] before:w-1/3 before:bg-gray-300 after:h-[1px] after:w-1/3 after:bg-gray-300">
                OR
              </span>

              <Link href="/auth/register" passHref>
                <button
                  className="focus:shadow-outline w-full rounded-full py-2 px-4 text-sm uppercase outline outline-2 outline-black hover:bg-black hover:text-white"
                  type="button"
                >
                  Create Account
                </button>
              </Link>

              <div className="mt-8 text-sm font-medium text-center text-gray-500">
                <Link href="/" passHref>
                  <a className="text-black hover:underline">Back to home</a>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
