import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// SVG polygon points for each lot (percentage-based coordinates mapped to 1000x1000 viewBox)
const lotPolygons: Record<string, string> = {
  '1':  '601,187 466,382 412,210 539,22',
  '2':  '311,148 412,211 486,458 594,473 581,495 283,454 207,295',
  '3':  '601,185 686,380 594,474 484,457 466,381',
  '4':  '580,497 281,455 459,731 477,759 536,718 565,667 564,568',
  '5':  '477,760 281,455 207,295 161,365 269,639 330,761 384,776 428,775',
  '6':  '223,689 29,563 161,365 268,638 331,763 304,749 298,716 284,694 260,681 242,681',
  '7':  '222,691 28,563 0,625 0,774 280,784 264,772 220,761 208,750 201,727 206,707',
  '8':  '281,783 321,802 360,814 392,817 428,816 411,928 194,881 59,837 0,774',
  '9':  '411,930 551,969 594,896 620,842 641,816 676,802 571,738 529,772 488,792 430,812',
  '10': '570,737 594,698 607,658 608,621 664,593 803,656 762,807 678,801',
  '11': '803,655 844,481 722,414 675,437 640,481 613,521 606,563 607,619 664,589',
  '12': '804,655 992,728 999,715 999,545 847,481',
  '13': '761,810 804,655 989,728 963,856',
};

export default function SitePlan() {
  const [hoveredLot, setHoveredLot] = useState<string | null>(null);
  const [expandedLot, setExpandedLot] = useState<string | null>(null);

  const lots = [
    { id: '1', size: '1.42 Acres', status: 'Sold', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Private cul-de-sac location with mature oak canopy.' },
    { id: '2', size: '2.62 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Largest lot in the development. Corner position with maximum privacy.' },
    { id: '3', size: '1.44 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'South-facing exposure ideal for natural light.' },
    { id: '4', size: '2.07 Acres', status: 'Under Contract', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Central lot with views of surrounding woodlands.' },
    { id: '5', size: '1.99 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Elevated position with potential for distant views.' },
    { id: '6', size: '1.93 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Borders conservation land to the west.' },
    { id: '7', size: '1.33 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Quiet interior lot with established tree line.' },
    { id: '8', size: '1.36 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Adjacent to community green space.' },
    { id: '9', size: '1.39 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Corner lot with dual road access potential.' },
    { id: '10', size: '1.43 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Backs to mature forest preserve.' },
    { id: '11', size: '1.46 Acres', status: 'Available', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Open meadow with perimeter tree line.' },
    { id: '12', size: '1.44 Acres', status: 'Sold', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Premium end-of-road location.' },
    { id: '13', size: '1.48 Acres', status: 'Sold', terrain: 'N/A', frontage: '0 ft', setback: '0 ft', utilities: 'N/A', notes: 'Southern exposure with natural drainage.' },
  ];

  const getLotColor = (status: string) => {
    if (status === 'Available') return 'rgba(45, 93, 91, 0.35)';
    if (status === 'Sold') return 'rgba(60, 110, 175, 0.35)';
    return 'rgba(200, 170, 50, 0.35)';
  };

  const getLotHighlight = (status: string) => {
    if (status === 'Available') return 'rgba(45, 93, 91, 0.6)';
    if (status === 'Sold') return 'rgba(60, 110, 175, 0.6)';
    return 'rgba(200, 170, 50, 0.6)';
  };

  return (
    <main className="pt-24">
      <section className="px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary mb-4">The Development</p>
          <h1 className="text-4xl md:text-6xl leading-tight font-light italic font-headline">Dearborn Woods Site Plan</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Interactive Site Plan Map */}
          <div className="lg:w-1/2 relative overflow-hidden bg-surface-container rounded-xl shadow-2xl">
            <div className="relative">
              <img
                className="w-full h-auto object-contain"
                src="/site-plan.png"
                alt="Site Plan Map"
              />
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid meet"
              >
                {lots.map((lot) => {
                  const points = lotPolygons[lot.id];
                  if (!points) return null;
                  const isHovered = hoveredLot === lot.id;
                  return (
                    <polygon
                      key={lot.id}
                      points={points}
                      fill={isHovered ? getLotHighlight(lot.status) : 'transparent'}
                      stroke={isHovered ? '#2D5D5B' : 'transparent'}
                      strokeWidth={isHovered ? 3 : 0}
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredLot(lot.id)}
                      onMouseLeave={() => setHoveredLot(null)}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Lot Inventory */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl font-headline italic mb-1">Lot Inventory</h2>
              <p className="text-secondary font-body text-sm">Available parcels for custom builds and pre-designed residences.</p>
            </div>

            <div className="overflow-y-auto no-scrollbar max-h-[600px]">
              {/* Header */}
              <div className="sticky top-0 bg-surface z-10 grid grid-cols-[40px_1fr_1fr_1fr] items-center border-b border-outline-variant/30 pb-3">
                <span className="font-label uppercase tracking-[0.15em] text-[10px] text-outline">Lot</span>
                <span className="font-label uppercase tracking-[0.15em] text-[10px] text-outline">Acreage</span>
                <span className="font-label uppercase tracking-[0.15em] text-[10px] text-outline">Status</span>
                <span className="font-label uppercase tracking-[0.15em] text-[10px] text-outline text-right">Action</span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-outline-variant/20">
                {lots.map((lot) => (
                  <div
                    key={lot.id}
                    onMouseEnter={() => setHoveredLot(lot.id)}
                    onMouseLeave={() => setHoveredLot(null)}
                  >
                    <div
                      className={`grid grid-cols-[40px_1fr_1fr_1fr] items-center cursor-pointer transition-colors px-3 -mx-3 rounded-lg ${
                        hoveredLot === lot.id ? 'bg-primary/10' : 'hover:bg-surface-container'
                      }`}
                    >
                      <span className="py-3 font-headline italic text-base">{lot.id}</span>
                      <span className="py-3 font-body text-sm">{lot.size}</span>
                      <span className="py-3">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 text-[9px] font-label uppercase tracking-widest rounded-lg ${
                          lot.status === 'Available' ? 'bg-primary/10 text-primary' :
                          lot.status === 'Sold' ? 'bg-secondary/10 text-secondary' :
                          'bg-outline-variant text-on-surface'
                        }`}>
                          {lot.status === 'Available' && <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>}
                          {lot.status}
                        </span>
                      </span>
                      <span className="py-3 text-right">
                        {lot.status === 'Sold' ? (
                          <span className="font-label text-[10px] uppercase tracking-widest opacity-30">Sold</span>
                        ) : (
                          <button
                            onClick={() => setExpandedLot(expandedLot === lot.id ? null : lot.id)}
                            className="text-primary font-label text-[10px] uppercase tracking-widest inline-flex items-center gap-1 hover:opacity-70 transition-all"
                          >
                            {expandedLot === lot.id ? 'Close' : 'View Details'}
                            <ChevronDown className={`w-3 h-3 transition-transform ${expandedLot === lot.id ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </span>
                    </div>
                    <AnimatePresence>
                      {expandedLot === lot.id && lot.status !== 'Sold' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-2 bg-surface-container/50 rounded-b-lg">
                            <div className="grid grid-cols-2 gap-3 mb-3">
                              <div>
                                <span className="font-label text-[9px] uppercase tracking-widest text-outline block">Terrain</span>
                                <span className="font-body text-sm">{lot.terrain}</span>
                              </div>
                              <div>
                                <span className="font-label text-[9px] uppercase tracking-widest text-outline block">Road Frontage</span>
                                <span className="font-body text-sm">{lot.frontage}</span>
                              </div>
                              <div>
                                <span className="font-label text-[9px] uppercase tracking-widest text-outline block">Setback</span>
                                <span className="font-body text-sm">{lot.setback}</span>
                              </div>
                              <div>
                                <span className="font-label text-[9px] uppercase tracking-widest text-outline block">Utilities</span>
                                <span className="font-body text-sm">{lot.utilities}</span>
                              </div>
                            </div>
                            <p className="text-secondary text-xs leading-relaxed italic">{lot.notes}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 text-center bg-surface">
        <div className="max-w-2xl mx-auto">
          <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary mb-6">Experience the Estate</p>
          <h2 className="text-5xl md:text-7xl font-headline italic mb-8">Ready to Walk the Grounds?</h2>
          <p className="text-secondary mb-12 text-lg">Schedule a private guided tour of the available lots with our development specialists.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:info@dearbornwoodsnh.com"
              className="inline-block text-center bg-primary text-on-primary px-12 py-5 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-colors rounded-xl"
            >
              Book a Site Visit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
