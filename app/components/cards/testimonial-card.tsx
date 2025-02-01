import { FC } from "react";

interface TestimonialProps {
  quote: string;
  author: string;
}

export const TestimonialCard: FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <figure className="rounded-lg bg-neutral-900 p-6 shadow-lg">
      <blockquote className="mb-4 text-lg italic text-gray-300">
        &quot;{quote}&quot;
      </blockquote>
      <figcaption className="text-sm font-semibold text-purple-400">
        – {author}
      </figcaption>
    </figure>
  );
};
