// components/DownArrow.tsx
export default function DownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <polygon points="50,65 25,35 75,35" fill="white" />
    </svg>
  );
}
