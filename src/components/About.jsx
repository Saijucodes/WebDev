import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am committed to writing high-quality front-end code that is clean,
            efficient, and maintainable. With a strong understanding of HTML,
            CSS, and JavaScript, I focus on creating responsive and
            user-friendly interfaces that enhance the user experience. My
            expertise in Tailwind CSS allows me to rapidly build stylish and
            modern designs with a utility-first approach, ensuring consistency
            and flexibility. Additionally, my proficiency in modern frameworks
            and libraries like React and Vue.js enables me to develop dynamic
            and interactive applications. By staying updated with the latest
            industry trends and best practices
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
