import { useState, useMemo } from "react";
import { Sprout, Wifi, BarChart3 } from "lucide-react";
import { SensorPanel } from "@/components/SensorPanel";
import { CropCard } from "@/components/CropCard";
import { SoilSensorData, recommendCrops } from "@/lib/cropData";
import heroFarm from "@/assets/hero-farm.jpg";

const defaultSensorData: SoilSensorData = {
  ph: 6.5,
  moisture: 55,
  nitrogen: 60,
  phosphorus: 35,
  potassium: 40,
  temperature: 25,
  soilType: "Loamy",
};

const Index = () => {
  const [sensorData, setSensorData] = useState<SoilSensorData>(defaultSensorData);
  const recommendations = useMemo(() => recommendCrops(sensorData), [sensorData]);

  const topCrops = recommendations.filter((r) => r.score >= 50).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={heroFarm}
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
          width={1920}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sprout className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">
                CropSense AI
              </h1>
            </div>
            <p className="text-primary-foreground/80 text-sm md:text-base max-w-md">
              Smart crop recommendations powered by real-time soil sensor data
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-growth animate-pulse" />
            <span className="text-muted-foreground">Sensor: <span className="font-semibold text-growth">Online</span></span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">{topCrops}</span> suitable crops found
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Sensor Panel */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-4">
              <SensorPanel data={sensorData} onChange={setSensorData} />
            </div>
          </div>

          {/* Right: Recommendations */}
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Sprout className="h-5 w-5 text-primary" />
              Crop Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec, i) => (
                <CropCard key={rec.crop.name} rec={rec} rank={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
