import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function ContactSetupTeam() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 px-4">

      {/* Text Content */}
      <div className="w-full lg:max-w-[600px]">
        <HeadingReuse heading={"Contact Our Setup Team"} />

        <ParagraphReUse paragraph={"Our team is ready to guide you through RAK DAO company setup and ethical compliance onboarding. Reach out or access the platform to get started today."} />

        <div className="mt-6 space-y-2 text-[20px] max-sm:text-base">
          <p>
            📩 Email:{" "}
            <a href="mailto:steve@algorethics.ai" className="text-[#651FFF] underline">
              steve@algorethics.ai
            </a>
          </p>
          <p>
            🌐 Platform Access:{" "}
            <a href="https://policyenforcement.com" target="_blank" className="text-[#651FFF] underline">
              policyenforcement.com
            </a>
          </p>
          <p>
            🗂️ RAK DAO Setup Form:{" "}
            <a href="https://algorethics.ai/rakdao" target="_blank" className="text-[#651FFF] underline">
              algorethics.ai/rakdao
            </a>
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:max-w-[500px]">
        <Image
          src="/vision.png"
          alt="contact-setup-team"
          width={500}
          height={580}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
