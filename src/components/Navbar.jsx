export const Navbar = () => {
  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-24">
          <div className="flex-shrink-0">
            <img src="/assets/logos/logo.png" alt="Logo" className="h-5 w-auto sm:h-7 md:h-8 lg:h-10" />
          </div>
          {/* Add a placeholder div for potential right-side content */}
          <div className="flex items-center">{/* You can add language selector, sign-in button, etc. here */}</div>
        </div>
      </div>
    </nav>
  )
}

