import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/collections", label: "Collections" },
        { path: "/request", label: "Product Request" },
        { path: "/track", label: "Track Order" }
    ]

    const authItems = [
        { path: "/login", label: "Login" },
        { path: "/register", label: "Register" }
    ]

    const isActivePath = (path: string) => location.pathname === path

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left Navigation - Desktop */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="relative group"
                                >
                                    <span className={`font-medium transition-colors duration-200 ${
                                        isActivePath(item.path) 
                                            ? "text-gray-900" 
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}>
                                        {item.label}
                                    </span>
                                    {isActivePath(item.path) && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900"
                                            layoutId="navbar-indicator"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-300 group-hover:w-full transition-all duration-200" />
                                </Link>
                            ))}
                        </div>

                        {/* Logo */}
                      <Link 
  to="/" 
  className="flex-shrink-0 flex items-center justify-center relative group"
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9, rotate: -2 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="relative"
  >
    {/* Main Logo Text */}
    <motion.h1
      className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-[0.15em] relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.span
        className="inline-block"
        whileHover={{ y: -3, color: "#111" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        B
      </motion.span>
      <motion.span
        className="inline-block"
        whileHover={{ y: -3, color: "#111" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
      >
        A
      </motion.span>
      <motion.span
        className="inline-block"
        whileHover={{ y: -3, color: "#111" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
      >
        T
      </motion.span>
      <motion.span
        className="inline-block"
        whileHover={{ y: -3, color: "#111" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.15 }}
      >
        A
      </motion.span>
    </motion.h1>

    {/* Animated underline */}
    <motion.div
      className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] bg-gray-900 rounded-full w-0 group-hover:w-full"
      initial={{ width: 0 }}
      animate={{ width: "50%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />

    {/* Subtle glowing ring effect on click */}
    <motion.div
      className="absolute inset-0 rounded-full blur-md"
      animate={{
        boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 15px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 2.5,
      }}
    />
  </motion.div>
</Link>


                        {/* Right Navigation - Desktop */}
                        <div className="hidden md:flex items-center space-x-6">
                            {authItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        isActivePath(item.path)
                                            ? "bg-gray-900 text-white shadow-lg"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`} />
                                <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                                    isMenuOpen ? "opacity-0" : "opacity-100"
                                }`} />
                                <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
                    initial={false}
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={{
                        open: { height: "auto", opacity: 1 },
                        closed: { height: 0, opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-4 py-6 space-y-4">
                        {[...navItems, ...authItems].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-3 px-4 rounded-xl transition-all duration-200 ${
                                    isActivePath(item.path)
                                        ? "bg-gray-900 text-white shadow-lg"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar