import { useState, useEffect } from "react";
import { Droplets, Thermometer, Leaf, FlaskConical, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SoilSensorData } from "@/lib/cropData";

interface SensorPanelProps {
  data: SoilSensorData;
  onChange: (data: SoilSensorData) => void;
}

interface SensorProgressProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  color: string;
}

const SensorProgress = ({ icon, label, value, min, max, unit, color }: SensorProgressProps) => {
  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg ${color}`}>{icon}</div>
          <span className="text-sm font-medium text-foreground">{label}</span>
        </div>
        <span className="text-sm font-semibold text-foreground tabular-nums">
          {value}{unit}
        </span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full flex-1 transition-all duration-500 bg-green-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const SensorPanel = ({ data }: SensorPanelProps) => {
  const [lastUpdated, setLastUpdated] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated((prev) => prev + 1);
    }, 1000);

    setLastUpdated(0);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <Card className="p-6 space-y-5 border-2 border-primary/10 bg-card shadow-lg">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primary/10 relative">
            <Activity className="h-5 w-5 text-primary" />
            <span className="absolute top-0 right-0 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Live Sensor Data</h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
              Auto-detected • {lastUpdated < 2 ? "Just now" : `${lastUpdated} sec ago`}
            </p>
          </div>
        </div>
        <div className="hidden sm:block bg-green-100/50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 uppercase tracking-wider">
          Online
        </div>
      </div>

      <div className="space-y-4">
        <SensorProgress
          icon={<Thermometer className="h-4 w-4 text-red-500" />}
          label="Temperature"
          value={data.temperature}
          min={0} max={50}
          unit="°C"
          color="bg-red-100"
        />
        <SensorProgress
          icon={<Droplets className="h-4 w-4 text-water" />}
          label="Moisture"
          value={data.moisture}
          min={0} max={100}
          unit="%"
          color="bg-blue-100"
        />
        <SensorProgress
          icon={<FlaskConical className="h-4 w-4 text-primary" />}
          label="pH Level"
          value={data.ph}
          min={3} max={10}
          unit=""
          color="bg-green-100"
        />
        <SensorProgress
          icon={<Leaf className="h-4 w-4 text-growth" />}
          label="Nitrogen (N)"
          value={data.nitrogen}
          min={0} max={200}
          unit=" kg/ha"
          color="bg-emerald-100"
        />
        <SensorProgress
          icon={<Leaf className="h-4 w-4 text-sun" />}
          label="Phosphorus (P)"
          value={data.phosphorus}
          min={0} max={100}
          unit=" kg/ha"
          color="bg-amber-100"
        />
        <SensorProgress
          icon={<Leaf className="h-4 w-4 text-earth" />}
          label="Potassium (K)"
          value={data.potassium}
          min={0} max={150}
          unit=" kg/ha"
          color="bg-orange-100"
        />
      </div>

      <div className="pt-3 border-t border-primary/10">
        <div className="flex items-center justify-between px-1">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Soil Type</span>
            <span className="text-sm font-semibold text-foreground">{data.soilType}</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
            Detected
          </span>
        </div>
      </div>
    </Card>
  );
};
