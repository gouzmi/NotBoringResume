import Lean from "@/templates/lean/lean";
import cvData from "@/data/cv.yaml";
import type { CVData } from "@/types/cv";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Selector from "@/components/selector";

function App() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Calculate scale factor to fit the A4 CV (297mm tall) into 95% of viewport height
  useEffect(() => {
    const updateScale = () => {
      // Target height: 95% of the viewport height in pixels
      const targetHeightPx = window.innerHeight * 0.95;

      // CV height in pixels: 297mm converted to px (1mm = 3.7795275591px at 96 DPI)
      const cvHeightPx = 297 * 3.7795275591;

      // Scale = how much to shrink the CV so its height matches the target
      // e.g., if viewport is 1080px → target = 1026px, CV = 1122px → scale ≈ 0.91
      setScale(targetHeightPx / cvHeightPx);
    };

    updateScale(); // Calculate on mount
    window.addEventListener("resize", updateScale); // Recalculate on window resize
    return () => window.removeEventListener("resize", updateScale); // Cleanup listener
  }, []);
  const reactToPrintFn = useReactToPrint({
    contentRef: cvRef,
    pageStyle: `
      @page { size: A4; margin: 0; }
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      html, body { margin: 0; padding: 0; }
      #cv {
        position: static !important;
        transform: none !important;
        box-shadow: none !important;
        width: 210mm !important;
        height: 297mm !important;
      }
    `,
  });
  const [cv, setCv] = useState<CVData>(cvData as unknown as CVData);

  return (
    <main className="h-screen bg-background flex text-xs">
      <Selector cv={cv} setCv={setCv} initialCv={cvData as unknown as CVData} printPdf={reactToPrintFn} />
      <div className="flex-1 flex items-center justify-center">
        <div id="cv-wrapper" className="h-[95vh] aspect-210/297 relative">
        <div
          id="cv"
          ref={cvRef}
          className="w-[210mm] h-[297mm] bg-background flex flex-row shadow-xl absolute top-0 left-0 origin-top-left"
          style={{ transform: `scale(${scale})` }}
        >
          <Lean CVData={cv}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
