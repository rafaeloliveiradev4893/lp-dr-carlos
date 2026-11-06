import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-11", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-carlos-on-dark.png"
      alt=""
      width={226}
      height={187}
      priority={priority}
      className={className}
      style={{ width: "auto", height: "2.75rem" }}
    />
  );
}
