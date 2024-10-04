import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Welcome to the Realm of Innovation
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Embark on a journey through the digital cosmos where your ideas
            transform into reality. Whether you're looking to forge new
            collaborations, unravel complex challenges, or share your own epic
            tales of development, your words hold immense power in this space.
            Utilize the form below to transmit your thoughts through the
            interconnected web of technology, and await the response that sparks
            new possibilities. Your contributions are valued scrolls in this
            realm of creativity and innovation. Together, let’s weave the fabric
            of the future!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
