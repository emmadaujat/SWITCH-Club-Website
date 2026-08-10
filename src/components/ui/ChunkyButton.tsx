import Link from "next/link";

type ChunkyButtonProps = {
  variant?: "primary" | "secondary" | "other";
  trailingSymbol?: string;
  href?: string; // if passed → renders as Link
  onClick?: () => void; // if passed → renders as button
  children: React.ReactNode;
};

const variantClasses = {
  primary: "bg-brand-purple text-white hover:bg-white hover:text-brand-purple",
  secondary: "bg-white text-brand-purple hover:bg-brand-purple hover:text-white",
  other: "bg-white text-black hover:bg-brand-purple hover:text-white",
};

const sharedClasses =
  "uppercase font-bold rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_#000] transition";

export default function ChunkyButton({
  variant = "primary",
  trailingSymbol,
  href,
  onClick,
  children,
}: ChunkyButtonProps) {
  const finalClasses = `${sharedClasses} ${variantClasses[variant]}`;

  const content = (
    <>
      {children}
      {trailingSymbol && <span> {trailingSymbol}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {content}
    </button>
  );
}
