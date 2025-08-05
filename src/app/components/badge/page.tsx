import { Badge } from "@/components/ui/badge";


const variants = ['neutral', 'danger', 'warning', 'success', 'brand'] as const;
const sizes = ['sm', 'md', 'lg'] as const;



export default function BadgePage() {
  return (
    <div className="flex flex-col items-center gap-6 pt-[200px]">

      {
        variants.map((variant) => (
          <div key={`${variant}`} className="flex flex-row gap-6 items-center">
            {sizes.map((size) => (
              <Badge
                key={`${variant}-${size}`}
                variant={variant}
                size={size}
              >
                Label
              </Badge>

            ))
            }
          </div>
        ))
      }
    </div>
  );
}
