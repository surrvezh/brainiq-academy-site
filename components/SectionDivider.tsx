// components/SectionDivider.tsx
// Zero-weight CSS clip-path angled divider between sections

interface Props {
  from: string; // tailwind bg color class of the section above
  to: string;   // tailwind bg color class of the section below
  flip?: boolean;
}

const COLOR_MAP: Record<string, string> = {
  navy: '#0D1B2A',
  card: '#112233',
};

export default function SectionDivider({ from, to, flip = false }: Props) {
  const fill = COLOR_MAP[to] ?? '#0D1B2A';

  return (
    <div className={`relative -mb-px bg-${from}`} style={{ height: 60, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {flip ? (
          <polygon points="0,60 1440,0 1440,60" fill={fill} />
        ) : (
          <polygon points="0,0 1440,60 1440,0" fill={fill} />
        )}
      </svg>
    </div>
  );
}
