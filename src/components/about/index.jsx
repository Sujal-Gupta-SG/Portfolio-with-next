import React from "react";
import Image from "next/image"; // Add this import statement
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Innovative Web Developer | Technology Enthusiast | Continuous Learner
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Currently pursuing my Bachelor&apos;s in Computer Applications from
            Kurukshetra University, I have developed a strong foundation in web
            development and computer applications. My proficiency in Java was
            built through courses from Apna College, which has been instrumental
            in shaping my skills for full-stack development. Alongside Java, I
            specialize in the MERN stack (MongoDB, Express, React/Next.js,
            Node.js), allowing me to create efficient and scalable web
            solutions. In addition, I hold multiple certifications from
            HackerRank in Python, JavaScript, and other technologies, which
            reflect my commitment to continuous learning and improvement. As I
            actively explore new opportunities, my aim is to apply my academic
            knowledge and hands-on experience to solve real-world challenges,
            driving innovation and delivering impactful web solutions. I am
            passionate about technology, constantly seeking to push the
            boundaries of what&apos;s possible in the web development space. I
            look forward to contributing my expertise to forward-thinking
            organizations that value creativity, innovation, and high-quality
            results.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years in Doing Coding</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Sujal-Gupta-SG&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Sujal Gupta"
            loading="lazy"
            width={500} // Add width and height
            height={500}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Sujal-Gupta-SG&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Sujal Gupta"
            loading="lazy"
            width={500} // Add width and height
            height={500}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,cloudflare,css,figma,firebase,git,github,html,js,mongodb,mysql,netlify,nextjs,nodejs,npm,react,redux,tailwind,vite,vscode,pycharm,java,cpp,python,c,express,ejs`}
            alt="Sujal Gupta"
            loading="lazy"
            width={500} // Add width and height
            height={500}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Sujal-Gupta-SG&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Sujal Gupta"
            loading="lazy"
            width={500} // Add width and height
            height={500}
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
