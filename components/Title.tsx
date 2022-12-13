interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <h1 className="mt-20 text-center text-6xl">{text}</h1>;
}
