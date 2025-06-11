// import React, { useState, useEffect } from 'react';
// import { CalendarCheck, Menu, X, User, LogIn } from 'lucide-react';
// import { useUser } from "@civic/auth/react";

// export const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { signIn, user } = useUser();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await signIn();
//       console.log('Civic Auth Response:', response);
//       console.log('Authenticated User:', user);
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   };

//   return (
//     <header 
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <CalendarCheck className="h-8 w-8 text-blue-500" />
//           <span className="ml-2 text-xl font-bold">Qpass</span>
//         </div>
        
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Home</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">How It Works</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Institutions</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
//         </nav>
        
//         <div className="hidden md:flex items-center space-x-4">
//           <button 
//             className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
//             onClick={handleLogin}
//           >
//             <LogIn className="h-5 w-5 inline mr-1" /> Log In
//           </button>
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//             <User className="h-5 w-5 inline mr-1" /> Sign Up
//           </button>
//         </div>
        
//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-gray-700"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
//           <div className="container mx-auto px-4 space-y-3">
//             <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
//             <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">How It Works</a>
//             <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Institutions</a>
//             <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Testimonials</a>
            
//             <div className="pt-2 flex flex-col space-y-2">
//               <button 
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
//                 onClick={handleLogin}
//               >
//                 Log In
//               </button>
//               <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };


import React, { useState, useEffect } from 'react';
import { CalendarCheck, Menu, X, User, LogIn, ChevronDown } from 'lucide-react';
import { useUser } from "@civic/auth/react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { user, signIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = async () => {
    try {
      console.log('Initiating Civic authentication...');
      
      // Initiate the sign-in process
      await signIn();
      
      // The user object will be updated by the Civic auth provider when successful
      console.log('Civic authentication initiated successfully');
    } catch (error) {
      console.error('Civic authentication error:', error);
    }
  };

  // Add effect to log when user authentication state changes
  useEffect(() => {
    if (user) {
      console.log('User authenticated successfully:', user);
      console.log('User details:', {
        id: user.id,
        name: user.name,
        email: user.email,
        //walletAddress: user.walletAddress
      });
    }
  }, [user]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      {/* Rest of your component remains the same */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <CalendarCheck className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-xl font-bold">Qpass</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">How It Works</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Institutions</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={handleLogin}
          >
            <LogIn className="h-5 w-5 inline mr-1" /> Log In
          </button>
          
          <div className="relative">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
              onClick={() => setIsSignUpOpen(!isSignUpOpen)}
            >
              <User className="h-5 w-5 inline mr-1" /> Sign Up <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            
            {isSignUpOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsSignUpOpen(false)}
                >
                  Register as Client
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsSignUpOpen(false)}
                >
                  Register as Institution/Company
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 space-y-3">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">How It Works</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Institutions</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Testimonials</a>
            
            <div className="pt-2 flex flex-col space-y-2">
              <button 
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                onClick={handleLogin}
              >
                Log In
              </button>
              
              <div className="flex flex-col space-y-2">
                <button 
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => {
                    // Handle client sign up
                    setIsMenuOpen(false);
                  }}
                >
                  Register as Client
                </button>
                <button 
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
                  onClick={() => {
                    // Handle institution sign up
                    setIsMenuOpen(false);
                  }}
                >
                  Register as Institution/Company
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};