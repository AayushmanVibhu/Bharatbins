type LoaderProps = {
  src: string;
};

export default function imageLoader({ src }: LoaderProps) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
