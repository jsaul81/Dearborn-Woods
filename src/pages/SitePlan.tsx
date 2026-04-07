import { motion } from 'motion/react';

export default function SitePlan() {
  const lots = [
    { id: '001', size: '2.45 Acres', road: 'Oak Ridge Trail', status: 'Available' },
    { id: '002', size: '1.89 Acres', road: 'Oak Ridge Trail', status: 'Sold' },
    { id: '003', size: '3.12 Acres', road: 'Dearborn Pass', status: 'Available' },
    { id: '004', size: '2.77 Acres', road: 'Dearborn Pass', status: 'Under Contract' },
    { id: '005', size: '4.05 Acres', road: 'Timberline Dr.', status: 'Available' },
    { id: '006', size: '2.22 Acres', road: 'Timberline Dr.', status: 'Available' },
    { id: '007', size: '2.50 Acres', road: 'Pine Hollow', status: 'Sold' },
    { id: '008', size: '3.85 Acres', road: 'Pine Hollow', status: 'Available' },
    { id: '009', size: '2.10 Acres', road: 'Creek Side Ln.', status: 'Under Contract' },
    { id: '010', size: '1.75 Acres', road: 'Creek Side Ln.', status: 'Available' },
  ];

  return (
    <main className="pt-24">
      <section className="px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary mb-4">The Development</p>
          <h1 className="text-6xl md:text-8xl leading-tight font-light italic font-headline">Masterful Site Plan</h1>
        </div>

        <div className="relative w-full aspect-[21/9] overflow-hidden bg-surface-container mb-24 rounded-xl shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsF4alvYy3LwOaErg9Xis-w5kjNWquc1pVJkgk53w2zilZbWg03wnJdM6W9acKfCOnhhEhJOXmve5PWyFHTa2F1THvG3L9gTVG84GKOncC92MiznVHif7zpRM-pdcBM-zYFffjSYoTWbU0MOji5OfvEN7iCd1n-oN1iP5v5ipoIwruY4eif1snYFSlICqnuZb7AFq83oGBjxzXoV8evTHlNrMC-n2WkY8QlunwDoiydA3R5UtloIAelKBbq7TygbZPMk1YXQAWMfVR" 
            alt="Site Plan Map"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 right-8 bg-surface/80 backdrop-blur-2xl p-8 max-w-sm border-l-4 border-primary rounded-xl shadow-xl">
            <h3 className="font-headline text-2xl italic mb-2">Preserving the Canopy</h3>
            <p className="text-secondary text-sm leading-relaxed mb-4">Our master plan prioritizes the natural topography of the woods, ensuring each lot maintains a minimum of 40% original forest cover.</p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">Total Acreage</span>
                <span className="font-headline text-xl italic">142 Acres</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">Green Space</span>
                <span className="font-headline text-xl italic">64 Acres</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h2 className="text-4xl font-headline italic mb-2">Lot Inventory</h2>
              <p className="text-secondary font-body">Available parcels for custom builds and pre-designed residences.</p>
            </div>
            <div className="flex gap-1 bg-surface-container p-1 rounded-xl shadow-inner">
              <button className="px-6 py-2 text-[10px] font-label uppercase tracking-widest bg-primary text-on-primary rounded-lg">All Lots</button>
              <button className="px-6 py-2 text-[10px] font-label uppercase tracking-widest text-secondary hover:bg-surface-container-high transition-colors rounded-lg">Available</button>
              <button className="px-6 py-2 text-[10px] font-label uppercase tracking-widest text-secondary hover:bg-surface-container-high transition-colors rounded-lg">Sold</button>
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b border-outline-variant/30">
                  <th className="pb-6 font-label uppercase tracking-[0.15em] text-[10px] text-outline">Lot #</th>
                  <th className="pb-6 font-label uppercase tracking-[0.15em] text-[10px] text-outline">Acreage</th>
                  <th className="pb-6 font-label uppercase tracking-[0.15em] text-[10px] text-outline">Road Access</th>
                  <th className="pb-6 font-label uppercase tracking-[0.15em] text-[10px] text-outline">Status</th>
                  <th className="pb-6 font-label uppercase tracking-[0.15em] text-[10px] text-outline text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {lots.map((lot) => (
                  <tr key={lot.id} className="group hover:bg-surface-container transition-colors">
                    <td className="py-8 font-headline italic text-2xl">{lot.id}</td>
                    <td className="py-8 font-body text-sm">{lot.size}</td>
                    <td className="py-8 font-body text-sm">{lot.road}</td>
                    <td className="py-8">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 text-[9px] font-label uppercase tracking-widest rounded-lg ${
                        lot.status === 'Available' ? 'bg-primary/10 text-primary' : 
                        lot.status === 'Sold' ? 'bg-secondary/10 text-secondary' : 
                        'bg-outline-variant text-on-surface'
                      }`}>
                        {lot.status === 'Available' && <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>}
                        {lot.status}
                      </span>
                    </td>
                    <td className="py-8 text-right">
                      {lot.status === 'Sold' ? (
                        <span className="font-label text-[10px] uppercase tracking-widest opacity-30">Unavailable</span>
                      ) : (
                        <a className="text-primary font-label text-[10px] uppercase tracking-widest underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all" href="#">
                          {lot.status === 'Available' ? 'View Details' : 'View Status'}
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 text-center bg-surface">
        <div className="max-w-2xl mx-auto">
          <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary mb-6">Experience the Estate</p>
          <h2 className="text-5xl md:text-7xl font-headline italic mb-8">Ready to Walk the Grounds?</h2>
          <p className="text-secondary mb-12 text-lg">Schedule a private guided tour of the available lots with our development specialists.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-primary text-on-primary px-12 py-5 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-colors rounded-xl">
              Book a Site Visit
            </button>
            <button className="border border-outline-variant text-secondary px-12 py-5 font-label uppercase tracking-widest text-xs hover:bg-surface-container transition-colors rounded-xl">
              Download Site Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
