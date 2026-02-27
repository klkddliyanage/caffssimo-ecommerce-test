import { useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Branch } from '../constants';

function FitBounds({ branches }: { branches: Branch[] }) {
  const map = useMap();
  const bounds = useMemo(() => {
    if (branches.length === 0) return null;
    return L.latLngBounds(branches.map((b) => [b.lat, b.lng] as L.LatLngTuple));
  }, [branches]);
  useEffect(() => {
    if (bounds) map.fitBounds(bounds, { padding: [24, 24], maxZoom: 12 });
  }, [map, bounds]);
  return null;
}

const createMarkerIcon = () =>
  L.divIcon({
    className: 'branch-marker',
    html: `<span style="
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #2B1E18;
      border: 2px solid #F5EFE6;
      box-shadow: 0 2px 8px rgba(43,30,24,0.2);
      display: block;
      margin: -6px 0 0 -6px;
    "></span>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

interface BranchMapProps {
  branches: Branch[];
  className?: string;
}

export default function BranchMap({ branches, className = '' }: BranchMapProps) {
  const icon = useMemo(createMarkerIcon, []);

  if (branches.length === 0) return null;

  const center: L.LatLngTuple = [branches[0].lat, branches[0].lng];

  return (
    <div className={`overflow-hidden rounded-2xl border border-mocha/10 soft-shadow ${className}`}>
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={true}
        className="h-full w-full min-h-[280px]"
        style={{ background: 'var(--color-cream, #F5EFE6)', zIndex: -1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitBounds branches={branches} />
        {branches.map((branch) => (
          <Marker key={branch.id} position={[branch.lat, branch.lng]} icon={icon}>
            <Popup>
              <div className="text-sm">
                <p className="font-semibold text-espresso">{branch.name}</p>
                <p className="text-text-secondary">{branch.address}</p>
                <p className="text-text-secondary">{branch.city}</p>
                {branch.mapUrl && (
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mocha text-xs font-medium mt-1 inline-block"
                  >
                    Directions →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
