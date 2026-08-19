import { randomUUID } from "crypto";
import QuizContainer from "@/components/quiz/QuizContainer";

// force-dynamic garante um event_id único por requisição (sem cache de página)
export const dynamic = "force-dynamic";

interface HomePageProps {
  searchParams: { v?: string };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const pageViewEventId = randomUUID();
  return <QuizContainer pageViewEventId={pageViewEventId} vendedor={searchParams.v} />;
}
