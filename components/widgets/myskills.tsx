import { SKILLS } from "@/lib/constants";
import { generateStars } from "@/lib/utils";

export default function MySkills() {
  return (
    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
      {SKILLS.map((skill) => (
        <div
          key={skill.id}
          className="w-full flex flex-col items-center md:items-start"
        >
          <span>{skill.title}</span>
          <span>{generateStars(skill.rate)}</span>
        </div>
      ))}
    </div>
  );
}

