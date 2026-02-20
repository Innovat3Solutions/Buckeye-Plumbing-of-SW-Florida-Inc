import { Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function MobileCallBar() {
  const location = useLocation();

  // Don't show on contact page since it already has prominent CTAs
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="flex">
        {/* Call Button - Primary */}
        <a
          href="tel:2394386662"
          className="flex-1 flex items-center justify-center gap-2 bg-buckeye-red text-white py-4 font-bold text-base active:bg-red-700 transition-colors"
        >
          <Phone className="w-5 h-5 fill-current" />
          Call Now
        </a>

        {/* Schedule Button - Secondary */}
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-4 font-bold text-base active:bg-gray-800 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          Schedule
        </Link>
      </div>
    </div>
  );
}
