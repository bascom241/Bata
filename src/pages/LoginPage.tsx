import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Variants } from 'framer-motion';
import { useAuthStore } from '../store/useAuthStore';
const LoginPage = () => {

  const { logging:isLoading, login } = useAuthStore();
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({ email: '', password: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(formData);


  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <main className="flex items-center justify-center p-4 bg-gray-50 min-h-screen">
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full border border-gray-200">

        {/* Advertisement Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 p-8 w-1/2 relative overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4 text-center"
            >
              WELCOME TO BATA
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-center mb-8 text-gray-600"
            >
              Premium Footwear Experience
            </motion.p>

            <motion.div
              variants={slideVariants as Variants}
              className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">🚀 FLASH SALE</h3>
              <p className="text-gray-600 mb-4">Up to 50% off on selected styles</p>
              <div className="flex justify-between text-sm">
                <span className="text-red-500 font-semibold">Limited Time</span>
                <span className="text-amber-500 font-semibold">⭐ Premium Collection</span>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-3"
            >
              <motion.div variants={itemVariants} className="flex items-center">
                <span className="mr-3 text-green-500">✓</span>
                <span className="text-gray-700">Free Shipping Worldwide</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center">
                <span className="mr-3 text-green-500">✓</span>
                <span className="text-gray-700">30-Day Return Policy</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center">
                <span className="mr-3 text-green-500">✓</span>
                <span className="text-gray-700">Premium Quality Guarantee</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center">
                <span className="mr-3 text-green-500">✓</span>
                <span className="text-gray-700">24/7 Customer Support</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated background elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
            className="absolute -right-20 -bottom-20 w-40 h-40 border-2 border-blue-200 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity }
            }}
            className="absolute -left-10 -top-10 w-32 h-32 border border-indigo-200 rounded-full"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-center text-gray-900 mb-2 tracking-wider"
            >
              BATA
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-center text-gray-600 mb-8 text-lg"
            >
              Choose how you would love to sign in
            </motion.p>

            {/* Social Login Options */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-white text-gray-700 p-3 rounded-lg border border-gray-300 hover:border-gray-400 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Google</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-white text-gray-700 p-3 rounded-lg border border-gray-300 hover:border-gray-400 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Apple</span>
              </motion.button>
            </motion.div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.input
                variants={itemVariants}
                value={formData.email}
                name='email'
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: "#000000" }}
                type="text"
                placeholder="Username or Email"
                className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 placeholder-gray-500 transition"
                required
              />
              <motion.input
                variants={itemVariants}
                whileFocus={{ scale: 1.02, borderColor: "#000000" }}
                value={formData.password}
                name='password'
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 placeholder-gray-500 transition"
                required
              />

              <motion.div variants={itemVariants} className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 bg-white border-gray-300 rounded focus:ring-black text-black" />
                  <span className="ml-2 text-gray-600 text-sm">Remember me</span>
                </label>
                <button type="button" className="text-sm text-gray-600 hover:text-black transition">
                  Forgot password?
                </button>
              </motion.div>

              {/* Black Login Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#000000",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white p-4 rounded-lg font-bold shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Signing in...
                  </>
                ) : (
                  'Login'
                )}
              </motion.button>
            </form>

            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className="text-gray-600">
                New to BATA?{' '}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-black font-semibold hover:underline"
                >
                  Create Account
                </motion.button>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;