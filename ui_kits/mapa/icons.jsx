/* Estrela Potiguar — Lucide-style inline icons (1.75px stroke, 24px grid).
   The product uses Lucide; these mirror that geometry for the kit. */
const I = (paths) => (props) => {
  const { size = 22, ...rest } = props || {};
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths}
    </svg>
  );
};

const Search   = I(<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>);
const MapIcon  = I(<><path d="M9 3 3 5.5v15L9 18l6 3 6-2.5v-15L15 6 9 3z"/><path d="M9 3v15M15 6v15"/></>);
const Compass  = I(<><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6 6-2z"/></>);
const Heart    = I(<path d="M12 20.5S4 16 4 9.8C4 7 6 5.2 8.4 5.2c1.7 0 3 .9 3.6 2.2.6-1.3 1.9-2.2 3.6-2.2C20 5.2 22 7 22 9.8c0 6.2-8 10.7-10 10.7z"/>);
const Star     = I(<path d="M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6z"/>);
const Plus     = I(<><path d="M12 5v14M5 12h14"/></>);
const Minus    = I(<path d="M5 12h14"/>);
const Locate   = I(<><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3.2M12 18.8V22M2 12h3.2M18.8 12H22"/></>);
const Layers   = I(<><path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 13l9 5 9-5"/></>);
const Clock    = I(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></>);
const Pin      = I(<><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></>);
const Route    = I(<><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="5" r="2.4"/><path d="M8.4 19H14a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h2.4"/></>);
const Share    = I(<><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 13.3l7.4 4.4M15.7 6.3 8.3 10.7"/></>);
const ChevDown = I(<path d="M6 9l6 6 6-6"/>);
const ChevLeft = I(<path d="M15 18l-6-6 6-6"/>);
const Sun      = I(<><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8"/></>);
const Camera   = I(<><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H7l1.4-2h7.2L17 7h2.5A1.5 1.5 0 0 1 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V8.5z"/><circle cx="12" cy="12.5" r="3.2"/></>);
const Wind     = I(<path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5M3 16h13a2.5 2.5 0 1 1-2.5 2.5M3 12h17a2.5 2.5 0 1 0-2.5-2.5"/>);
const Waves    = I(<path d="M2 7c1.6 0 1.6-1.6 3.2-1.6S6.8 7 8.4 7 10 5.4 11.6 5.4 13.2 7 14.8 7 16.4 5.4 18 5.4 19.6 7 21.2 7M2 13c1.6 0 1.6-1.6 3.2-1.6S6.8 13 8.4 13 10 11.4 11.6 11.4 13.2 13 14.8 13 16.4 11.4 18 11.4 19.6 13 21.2 13M2 19c1.6 0 1.6-1.6 3.2-1.6S6.8 19 8.4 19 10 17.4 11.6 17.4 13.2 19 14.8 19 16.4 17.4 18 17.4 19.6 19 21.2 19"/>);
const Landmark = I(<><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3 21 8H3l9-5z"/></>);
const Trees    = I(<><path d="M8 3l4 6H4l4-6z"/><path d="M8 8l4 6H4l4-6z"/><path d="M8 14v7"/><path d="M16 5l3 5h-6l3-5z"/><path d="M16 9l3 5h-6l3-5z"/><path d="M16 14v7"/></>);
const Mountain = I(<path d="M3 20h18L14 7l-3.5 6L8 9 3 20z"/>);

window.EPIcons = {
  Search, MapIcon, Compass, Heart, Star, Plus, Minus, Locate, Layers, Clock,
  Pin, Route, Share, ChevDown, ChevLeft, Sun, Camera, Wind, Waves, Landmark, Trees, Mountain,
};
