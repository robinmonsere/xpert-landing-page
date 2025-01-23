import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-transparent pt-3">
        <div className={"max-w-5xl mx-auto flex flex-row gap-3 justify-end font-semibold"}>
            <Link href="/features">Features</Link>
            <Link href="#contact">Contact</Link>
        </div>
    </header>
  );
};