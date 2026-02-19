import { MapPin } from 'lucide-react';

const areas = [
  'Naples',
  'North Naples',
  'Bonita Springs',
  'Estero',
  'Marco Island',
  'Fort Myers',
  'Cape Coral',
  'Lehigh Acres',
];

export default function ServiceAreaMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Serving All of <span className="text-buckeye-red">Southwest Florida</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From Marco Island to Fort Myers, our team is ready to dispatch to your location. We know the local plumbing systems and regulations better than anyone.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-gray-700 font-medium">
                  <MapPin className="w-5 h-5 text-buckeye-red" />
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Not sure if we cover your area?</h3>
              <p className="text-gray-600 mb-4">Give us a call! We likely have a technician nearby.</p>
              <a href="tel:2394386662" className="text-buckeye-red font-bold hover:underline">
                Call (239) 438-6662
              </a>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            {/* Placeholder for Map - using a static map image of SWFL */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Map_of_Florida_highlighting_Collier_County.svg/1200px-Map_of_Florida_highlighting_Collier_County.svg.png" 
              alt="Service Area Map SW Florida" 
              className="w-full h-full object-cover bg-gray-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-lg">Local & Ready to Serve</p>
                <p className="text-sm opacity-80">Fast dispatch to your neighborhood</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
