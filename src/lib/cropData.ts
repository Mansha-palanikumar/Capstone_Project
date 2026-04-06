export interface CropRequirement {
  name: string;
  emoji: string;
  description: string;
  season: string;
  ph: { min: number; max: number };
  temperature: { min: number; max: number };
  moisture: { min: number; max: number };
  nitrogen: { min: number; max: number };
  phosphorus: { min: number; max: number };
  potassium: { min: number; max: number };
  soilTypes: string[];
}

export const crops: CropRequirement[] = [
  {
    name: "Rice",
    emoji: "🌾",
    description: "Staple grain crop requiring warm, wet conditions with flooded paddy fields.",
    season: "Kharif (Jun-Nov)",
    ph: { min: 5.5, max: 7.0 },
    temperature: { min: 20, max: 35 },
    moisture: { min: 60, max: 95 },
    nitrogen: { min: 60, max: 120 },
    phosphorus: { min: 20, max: 60 },
    potassium: { min: 30, max: 60 },
    soilTypes: ["Clay", "Loamy", "Alluvial"],
  },
  {
    name: "Wheat",
    emoji: "🌾",
    description: "Cool-season cereal crop, ideal for well-drained fertile soils.",
    season: "Rabi (Nov-Apr)",
    ph: { min: 6.0, max: 7.5 },
    temperature: { min: 10, max: 25 },
    moisture: { min: 30, max: 60 },
    nitrogen: { min: 40, max: 80 },
    phosphorus: { min: 20, max: 50 },
    potassium: { min: 20, max: 50 },
    soilTypes: ["Loamy", "Clay Loam", "Alluvial"],
  },
  {
    name: "Maize",
    emoji: "🌽",
    description: "Versatile cereal that grows in warm weather with moderate water needs.",
    season: "Kharif / Rabi",
    ph: { min: 5.5, max: 7.5 },
    temperature: { min: 18, max: 32 },
    moisture: { min: 40, max: 70 },
    nitrogen: { min: 60, max: 120 },
    phosphorus: { min: 25, max: 60 },
    potassium: { min: 25, max: 60 },
    soilTypes: ["Loamy", "Sandy Loam", "Alluvial"],
  },
  {
    name: "Cotton",
    emoji: "🏵️",
    description: "Fiber crop needing hot weather and well-drained black soil.",
    season: "Kharif (Apr-Oct)",
    ph: { min: 6.0, max: 8.0 },
    temperature: { min: 25, max: 40 },
    moisture: { min: 30, max: 55 },
    nitrogen: { min: 40, max: 80 },
    phosphorus: { min: 20, max: 40 },
    potassium: { min: 20, max: 40 },
    soilTypes: ["Black", "Loamy", "Clay Loam"],
  },
  {
    name: "Sugarcane",
    emoji: "🎋",
    description: "Tropical crop requiring long growing season with abundant water.",
    season: "Year-round",
    ph: { min: 5.0, max: 8.0 },
    temperature: { min: 20, max: 38 },
    moisture: { min: 55, max: 85 },
    nitrogen: { min: 80, max: 150 },
    phosphorus: { min: 30, max: 60 },
    potassium: { min: 40, max: 80 },
    soilTypes: ["Loamy", "Clay Loam", "Alluvial"],
  },
  {
    name: "Tomato",
    emoji: "🍅",
    description: "Warm-season vegetable crop needing well-drained, nutrient-rich soil.",
    season: "Year-round",
    ph: { min: 6.0, max: 7.0 },
    temperature: { min: 18, max: 30 },
    moisture: { min: 40, max: 70 },
    nitrogen: { min: 50, max: 100 },
    phosphorus: { min: 30, max: 60 },
    potassium: { min: 40, max: 80 },
    soilTypes: ["Loamy", "Sandy Loam", "Red"],
  },
  {
    name: "Potato",
    emoji: "🥔",
    description: "Cool-weather tuber crop preferring loose, well-drained acidic soil.",
    season: "Rabi (Oct-Mar)",
    ph: { min: 4.8, max: 6.5 },
    temperature: { min: 10, max: 22 },
    moisture: { min: 50, max: 75 },
    nitrogen: { min: 60, max: 120 },
    phosphorus: { min: 40, max: 80 },
    potassium: { min: 50, max: 100 },
    soilTypes: ["Sandy Loam", "Loamy", "Alluvial"],
  },
  {
    name: "Soybean",
    emoji: "🫘",
    description: "Leguminous oilseed crop that fixes nitrogen in the soil.",
    season: "Kharif (Jun-Oct)",
    ph: { min: 6.0, max: 7.5 },
    temperature: { min: 20, max: 30 },
    moisture: { min: 40, max: 65 },
    nitrogen: { min: 20, max: 50 },
    phosphorus: { min: 20, max: 50 },
    potassium: { min: 20, max: 50 },
    soilTypes: ["Loamy", "Clay Loam", "Black"],
  },
  {
    name: "Groundnut",
    emoji: "🥜",
    description: "Legume crop needing warm weather and sandy, well-drained soil.",
    season: "Kharif (Jun-Oct)",
    ph: { min: 5.5, max: 7.0 },
    temperature: { min: 22, max: 35 },
    moisture: { min: 35, max: 60 },
    nitrogen: { min: 10, max: 30 },
    phosphorus: { min: 20, max: 50 },
    potassium: { min: 20, max: 40 },
    soilTypes: ["Sandy", "Sandy Loam", "Red"],
  },
  {
    name: "Chickpea",
    emoji: "🫛",
    description: "Cool-season pulse crop tolerant of dry conditions.",
    season: "Rabi (Oct-Mar)",
    ph: { min: 6.0, max: 8.0 },
    temperature: { min: 10, max: 25 },
    moisture: { min: 25, max: 50 },
    nitrogen: { min: 10, max: 30 },
    phosphorus: { min: 20, max: 40 },
    potassium: { min: 15, max: 35 },
    soilTypes: ["Loamy", "Clay Loam", "Black"],
  },
  {
    name: "Banana",
    emoji: "🍌",
    description: "Tropical fruit crop needing rich soil and consistent moisture.",
    season: "Year-round",
    ph: { min: 5.5, max: 7.0 },
    temperature: { min: 25, max: 35 },
    moisture: { min: 60, max: 85 },
    nitrogen: { min: 100, max: 200 },
    phosphorus: { min: 30, max: 60 },
    potassium: { min: 80, max: 150 },
    soilTypes: ["Loamy", "Clay Loam", "Alluvial"],
  },
  {
    name: "Millet",
    emoji: "🌿",
    description: "Hardy grain crop tolerant of drought and poor soils.",
    season: "Kharif (Jun-Oct)",
    ph: { min: 5.5, max: 7.5 },
    temperature: { min: 25, max: 40 },
    moisture: { min: 20, max: 45 },
    nitrogen: { min: 20, max: 50 },
    phosphorus: { min: 10, max: 30 },
    potassium: { min: 10, max: 30 },
    soilTypes: ["Sandy", "Sandy Loam", "Red", "Laterite"],
  },
];

export interface SoilSensorData {
  ph: number;
  moisture: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  soilType: string;
}

function rangeScore(value: number, min: number, max: number): number {
  if (value >= min && value <= max) return 1;
  const mid = (min + max) / 2;
  const range = max - min;
  const dist = value < min ? min - value : value - max;
  return Math.max(0, 1 - dist / (range * 0.5));
}

export interface CropRecommendation {
  crop: CropRequirement;
  score: number;
  factors: {
    ph: number;
    temperature: number;
    moisture: number;
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    soilType: number;
  };
}

export function recommendCrops(data: SoilSensorData): CropRecommendation[] {
  return crops
    .map((crop) => {
      const factors = {
        ph: rangeScore(data.ph, crop.ph.min, crop.ph.max),
        temperature: rangeScore(data.temperature, crop.temperature.min, crop.temperature.max),
        moisture: rangeScore(data.moisture, crop.moisture.min, crop.moisture.max),
        nitrogen: rangeScore(data.nitrogen, crop.nitrogen.min, crop.nitrogen.max),
        phosphorus: rangeScore(data.phosphorus, crop.phosphorus.min, crop.phosphorus.max),
        potassium: rangeScore(data.potassium, crop.potassium.min, crop.potassium.max),
        soilType: crop.soilTypes.includes(data.soilType) ? 1 : 0.3,
      };

      const weights = { ph: 0.15, temperature: 0.2, moisture: 0.15, nitrogen: 0.12, phosphorus: 0.12, potassium: 0.12, soilType: 0.14 };
      const score = Object.keys(factors).reduce(
        (sum, key) => sum + factors[key as keyof typeof factors] * weights[key as keyof typeof weights],
        0
      );

      return { crop, score: Math.round(score * 100), factors };
    })
    .sort((a, b) => b.score - a.score);
}

export const soilTypes = ["Loamy", "Clay", "Sandy", "Sandy Loam", "Clay Loam", "Alluvial", "Black", "Red", "Laterite"];
