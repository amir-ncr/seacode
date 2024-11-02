import Hero from "@/components/market/Hero";
import QuestionAnswerSec from "@/components/market/QandA";
import Quotation from "@/components/market/Quotation";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Quotation />
      </div>
      <div>
        <QuestionAnswerSec />
      </div>
      <div className=" h-screen" />
    </div>
  );
}
