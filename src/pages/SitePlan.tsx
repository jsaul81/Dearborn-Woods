import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

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

// House plans that have a published design on /floor-plans, keyed to the anchor each
// links to. A plan named on the lot list but missing here (Langdon, Gilman and Atkinson
// as of 2026-11) renders as plain text, so the table never links to a page that does not exist.
const publishedPlans: Record<string, string> = {
  Belknap: 'belknap',
  Birchwood: 'birchwood',
  Dearborn: 'dearborn',
  Wentworth: 'wentworth',
  'Ona Judge': 'ona-judge',
};

// Sampled from the legend printed on public/site-plan.jpg, so these dots match the map
// artwork the visitor is looking at (the hover overlay below uses its own tints).
// Lot | Acreage | Status | House Plan. Widths fit the longest content in each column
// ("Under Contract", "2.62 Acres") so every row lines up.
const COLS = 'grid-cols-[2.5rem_6.5rem_9.5rem_1fr]';

const legendColor: Record<string, string> = {
  Available: 'rgb(133, 146, 83)',
  'Under Contract': 'rgb(222, 186, 32)',
  Sold: 'rgb(107, 131, 178)',
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] font-label uppercase tracking-widest rounded-lg whitespace-nowrap ${
      status === 'Available' ? 'bg-primary/10 text-primary' :
      status === 'Sold' ? 'bg-secondary/10 text-secondary' :
      'bg-outline-variant text-on-surface'
    }`}>
      {status === 'Available' && <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>}
      {status}
    </span>
  );
}

function PlanNames({ plans }: { plans: string[] }) {
  if (plans.length === 0) {
    return <span className="font-body text-sm italic text-outline">To be determined</span>;
  }
  return (
    <>
      {plans.map((name, i) => (
        <Fragment key={name}>
          {i > 0 && <span className="font-body text-xs text-outline mx-1.5">or</span>}
          {publishedPlans[name] ? (
            <Link
              to={`/floor-plans#${publishedPlans[name]}`}
              className="font-headline italic text-base text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors whitespace-nowrap"
            >
              {name}
            </Link>
          ) : (
            <span className="font-headline italic text-base whitespace-nowrap">{name}</span>
          )}
        </Fragment>
      ))}
    </>
  );
}

export default function SitePlan() {
  const [hoveredLot, setHoveredLot] = useState<string | null>(null);

  const lots = [
    { id: '1', size: '1.42 Acres', status: 'Sold', plans: ['Ona Judge'] },
    { id: '2', size: '2.62 Acres', status: 'Available', plans: ['Birchwood', 'Belknap'] },
    { id: '3', size: '1.44 Acres', status: 'Available', plans: ['Dearborn'] },
    { id: '4', size: '2.07 Acres', status: 'Under Contract', plans: ['Langdon'] },
    { id: '5', size: '1.99 Acres', status: 'Available', plans: ['Birchwood', 'Belknap'] },
    { id: '6', size: '1.93 Acres', status: 'Available', plans: [] },
    { id: '7', size: '1.33 Acres', status: 'Available', plans: [] },
    { id: '8', size: '1.38 Acres', status: 'Available', plans: ['Gilman'] },
    { id: '9', size: '1.39 Acres', status: 'Under Contract', plans: ['Atkinson'] },
    { id: '10', size: '1.43 Acres', status: 'Under Contract', plans: ['Wentworth'] },
    { id: '11', size: '1.46 Acres', status: 'Available', plans: ['Wentworth'] },
    { id: '12', size: '1.44 Acres', status: 'Sold', plans: ['Belknap'] },
    { id: '13', size: '1.48 Acres', status: 'Sold', plans: ['Birchwood'] },
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
          <div className="lg:w-1/2 lg:sticky lg:top-28 lg:self-start relative overflow-hidden bg-surface-container rounded-xl shadow-2xl">
            <div className="relative">
              <img
                className="w-full h-auto object-contain"
                src="/site-plan.jpg"
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
              <p className="text-secondary font-body text-sm">Each lot and the home planned for it. Select a plan to view its floor plan.</p>
            </div>

            {/* At-a-glance counts, derived from the data so they can never drift from the table */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              {(['Available', 'Under Contract', 'Sold'] as const).map((status) => (
                <span key={status} className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-secondary">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: legendColor[status] }}
                  />
                  <span className="text-on-surface font-medium">{lots.filter((l) => l.status === status).length}</span>
                  {status}
                </span>
              ))}
            </div>

            {/* All 13 rows shown in full. The old fixed-height box hid its scrollbar, so the
                last lots were invisible with no cue that anything was below. */}
            <div>
              {/* Header - desktop only; the mobile rows below are self-describing */}
              <div className={`hidden md:grid ${COLS} gap-x-3 items-center border-b border-outline-variant/30 pb-3`}>
                <span className="font-label uppercase tracking-[0.15em] text-[11px] text-outline">Lot</span>
                <span className="font-label uppercase tracking-[0.15em] text-[11px] text-outline">Acreage</span>
                <span className="font-label uppercase tracking-[0.15em] text-[11px] text-outline">Status</span>
                <span className="font-label uppercase tracking-[0.15em] text-[11px] text-outline">House Plan</span>
              </div>

              <div className="divide-y divide-outline-variant/20 border-t border-outline-variant/30 md:border-t-0">
                {lots.map((lot) => (
                  <div
                    key={lot.id}
                    onMouseEnter={() => setHoveredLot(lot.id)}
                    onMouseLeave={() => setHoveredLot(null)}
                    className={`px-3 -mx-3 rounded-lg transition-colors ${
                      hoveredLot === lot.id ? 'bg-primary/10' : 'hover:bg-surface-container'
                    }`}
                  >
                    {/* Desktop: four aligned columns. Fixed widths, because each row is its own
                        grid - fractional widths let every row size itself and the columns drift. */}
                    <div className={`hidden md:grid ${COLS} gap-x-3 items-center py-3.5`}>
                      <span className="font-headline italic text-lg">{lot.id}</span>
                      <span className="font-body text-sm whitespace-nowrap">{lot.size}</span>
                      <span><StatusBadge status={lot.status} /></span>
                      <span className="leading-snug"><PlanNames plans={lot.plans} /></span>
                    </div>

                    {/* Mobile: four columns do not fit, so plan and acreage stack beside the lot number */}
                    <div className="md:hidden flex items-center gap-4 py-4">
                      <span className="font-headline italic text-2xl w-8 shrink-0">{lot.id}</span>
                      <div className="flex-1 min-w-0">
                        <div className="leading-snug"><PlanNames plans={lot.plans} /></div>
                        <div className="font-body text-xs text-secondary mt-1">{lot.size}</div>
                      </div>
                      <span className="shrink-0"><StatusBadge status={lot.status} /></span>
                    </div>
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
            <Link
              to="/contact"
              className="inline-block text-center bg-primary text-on-primary px-12 py-5 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-colors rounded-xl"
            >
              Book a Site Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
