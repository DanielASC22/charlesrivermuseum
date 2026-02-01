import { motion } from "framer-motion";

// Realistic gear SVG with proper teeth
const Gear = ({ 
  size = 100, 
  teeth = 12, 
  innerRadius = 0.3,
  spokeCount = 6,
  className = "",
  duration = 20,
  reverse = false,
}: {
  size?: number;
  teeth?: number;
  innerRadius?: number;
  spokeCount?: number;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) => {
  const outerRadius = 45;
  const toothDepth = 8;
  const toothWidth = (2 * Math.PI * outerRadius) / (teeth * 2.5);
  
  // Generate gear teeth path
  const generateGearPath = () => {
    let path = "";
    const angleStep = (2 * Math.PI) / teeth;
    
    for (let i = 0; i < teeth; i++) {
      const angle = i * angleStep;
      const nextAngle = angle + angleStep;
      
      // Tooth base start
      const x1 = 50 + (outerRadius - toothDepth) * Math.cos(angle);
      const y1 = 50 + (outerRadius - toothDepth) * Math.sin(angle);
      
      // Tooth tip start
      const tipAngle1 = angle + angleStep * 0.15;
      const x2 = 50 + outerRadius * Math.cos(tipAngle1);
      const y2 = 50 + outerRadius * Math.sin(tipAngle1);
      
      // Tooth tip end
      const tipAngle2 = angle + angleStep * 0.35;
      const x3 = 50 + outerRadius * Math.cos(tipAngle2);
      const y3 = 50 + outerRadius * Math.sin(tipAngle2);
      
      // Tooth base end
      const baseAngle2 = angle + angleStep * 0.5;
      const x4 = 50 + (outerRadius - toothDepth) * Math.cos(baseAngle2);
      const y4 = 50 + (outerRadius - toothDepth) * Math.sin(baseAngle2);
      
      // Valley
      const valleyAngle = angle + angleStep * 0.75;
      const x5 = 50 + (outerRadius - toothDepth) * Math.cos(valleyAngle);
      const y5 = 50 + (outerRadius - toothDepth) * Math.sin(valleyAngle);
      
      if (i === 0) {
        path += `M ${x1} ${y1} `;
      }
      path += `L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} L ${x5} ${y5} `;
    }
    path += "Z";
    return path;
  };

  // Generate spokes
  const generateSpokes = () => {
    const spokes = [];
    const hubRadius = outerRadius * innerRadius;
    const spokeInnerRadius = hubRadius + 3;
    const spokeOuterRadius = outerRadius - toothDepth - 3;
    
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i * 2 * Math.PI) / spokeCount;
      const x1 = 50 + spokeInnerRadius * Math.cos(angle);
      const y1 = 50 + spokeInnerRadius * Math.sin(angle);
      const x2 = 50 + spokeOuterRadius * Math.cos(angle);
      const y2 = 50 + spokeOuterRadius * Math.sin(angle);
      
      spokes.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      );
    }
    return spokes;
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Main gear body */}
      <path
        d={generateGearPath()}
        fill="currentColor"
      />
      
      {/* Inner cutout circle (creates the ring effect) */}
      <circle
        cx="50"
        cy="50"
        r={outerRadius - toothDepth - 6}
        fill="transparent"
        stroke="currentColor"
        strokeWidth="6"
      />
      
      {/* Spokes */}
      {generateSpokes()}
      
      {/* Center hub */}
      <circle
        cx="50"
        cy="50"
        r={outerRadius * innerRadius}
        fill="currentColor"
      />
      
      {/* Center hole */}
      <circle
        cx="50"
        cy="50"
        r={outerRadius * innerRadius * 0.4}
        fill="hsl(var(--background))"
      />
    </motion.svg>
  );
};

// Interlocking gear system for decorative use
export const GearCluster = ({ 
  className = "",
  opacity = 0.15,
}: {
  className?: string;
  opacity?: number;
}) => {
  return (
    <div className={`pointer-events-none ${className}`} style={{ opacity }}>
      {/* Large main gear */}
      <Gear 
        size={200} 
        teeth={16} 
        spokeCount={8}
        duration={30}
        className="text-secondary absolute -right-20 -top-20"
      />
      
      {/* Medium gear - meshes with large gear */}
      <Gear 
        size={120} 
        teeth={10} 
        spokeCount={5}
        duration={18}
        reverse
        className="text-secondary absolute right-32 top-24"
      />
      
      {/* Small gear - meshes with medium gear */}
      <Gear 
        size={80} 
        teeth={8} 
        spokeCount={4}
        duration={12}
        className="text-secondary absolute right-16 top-40"
      />
    </div>
  );
};

// Single decorative gear for subtle accents
export const SingleGear = ({
  size = 60,
  teeth = 10,
  duration = 20,
  reverse = false,
  className = "",
}: {
  size?: number;
  teeth?: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <Gear
      size={size}
      teeth={teeth}
      duration={duration}
      reverse={reverse}
      className={className}
    />
  );
};

// Corner gear decoration
export const CornerGears = ({
  position = "bottom-right",
  opacity = 0.1,
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  opacity?: number;
}) => {
  const positionClasses = {
    "top-left": "-top-16 -left-16",
    "top-right": "-top-16 -right-16",
    "bottom-left": "-bottom-16 -left-16",
    "bottom-right": "-bottom-16 -right-16",
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none`}
      style={{ opacity }}
    >
      <Gear 
        size={180} 
        teeth={14}
        spokeCount={7}
        duration={25}
        className="text-secondary"
      />
      <div className="absolute top-28 left-20">
        <Gear 
          size={100} 
          teeth={9}
          spokeCount={4}
          duration={14}
          reverse
          className="text-secondary"
        />
      </div>
    </div>
  );
};

export default Gear;
