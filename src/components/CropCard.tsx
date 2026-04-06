import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CropRecommendation } from "@/lib/cropData";

interface CropCardProps {
  rec: CropRecommendation;
  rank: number;
}

const factorLabels: Record<string, string> = {
  ph: "pH",
  temperature: "Temp",
  moisture: "Moisture",
  nitrogen: "N",
  phosphorus: "P",
  potassium: "K",
  soilType: "Soil",
};

export const CropCard = ({ rec, rank }: CropCardProps) => {
  const { crop, score, factors } = rec;

  const scoreColor =
    score >= 75
      ? "bg-primary text-primary-foreground"
      : score >= 50
      ? "bg-sun text-sun-foreground"
      : "bg-destructive/80 text-destructive-foreground";

  const badgeVariant =
    score >= 75 ? "default" : score >= 50 ? "secondary" : "destructive";

  const suitability =
    score >= 75 ? "Highly Suitable" : score >= 50 ? "Moderately Suitable" : "Low Suitability";

  return (
    <Card className="p-5 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{crop.emoji}</span>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {crop.name}
            </h3>
            <p className="text-xs text-muted-foreground">{crop.season}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {rank <= 3 && (
            <span className="text-lg">{rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉"}</span>
          )}
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${scoreColor}`}>
            {score}%
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{crop.description}</p>

      <Badge variant={badgeVariant} className="mb-3 text-xs">
        {suitability}
      </Badge>

      <div className="grid grid-cols-7 gap-1">
        {Object.entries(factors).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-[10px] text-muted-foreground mb-1">{factorLabels[key]}</div>
            <Progress
              value={value * 100}
              className="h-1.5"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};
