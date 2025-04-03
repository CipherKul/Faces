const LoginPage = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-[600px] text-center">
          <p className="text-3xl font-semibold">Welcome to Faces</p>
          <p className="text-gray-600 mt-2">Please use your Okta credentials to log in</p>
          
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg w-[90%] hover:bg-green-900 transition-all">
            Log in with Okta
          </button>

          <p className="text-gray-500 text-sm mt-4">
            By logging in, you agree to our <a href="#" className="text-blue-500 underline">Terms of Service & Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Right Section - Image Fully Covers */}
      <div className="relative w-1/2 h-screen">
        <img 
          src="/Images/loginpage.png"
          alt="Login illustration"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
